import { Request, Response } from "express";
import { renderToStaticMarkup } from "react-dom/server";
import mysql from "./mysql";
import Html from "../components/layout/Html";
import Activity from "../components/pages/Activity";
import CreatePage from "../components/pages/Create";
import DeletePage from "../components/pages/Delete";
import ActionResultPage from "../components/pages/ActionResult";
import { generateTimeOptions, formatDate } from "./helper";
import {
  ActivityDefinitionSchema,
  EventMap,
  EventTableRow,
  LogSchema,
  TimeOption,
} from "../interface";

interface FileMapType {
  [key: string]: string;
}

const fileMap: FileMapType =
  process.env.NODE_ENV === "development"
    ? {
        "app.js": "./local/client/index.js",
      }
    : {
        "app.js": "./dist/client/index.js",
        "style.css": "./dist/client/main.css",
      };

const childId = 1;

export const renderActivity = async (req: Request, res: Response) => {
  const actDefs = (await mysql(
    "select * from activity_def"
  )) as ActivityDefinitionSchema[];

  const actMap = actDefs.reduce(
    (
      acc: Record<number, ActivityDefinitionSchema>,
      cur: ActivityDefinitionSchema
    ) => {
      acc[cur.id] = cur;
      return acc;
    },
    {}
  );

  let whereClause = null;
  let selectedActivity: number[];

  const { activity } = req.query;
  if (Array.isArray(activity)) {
    selectedActivity = (activity as string[]).map((v) => parseInt(v, 10));
    whereClause = `WHERE activity_id in (${selectedActivity.join(",")})`;
  } else if (activity) {
    selectedActivity = [parseInt(activity.toString(), 10)];
    whereClause = `WHERE activity_id = ${activity}`;
  } else {
    selectedActivity = actDefs.map((v: ActivityDefinitionSchema) => v.id);
    whereClause = "";
  }

  const query = `SELECT * FROM logs ${whereClause} ORDER BY event_time DESC LIMIT 200`;
  const logs = (await mysql(query)) as LogSchema[];

  const timeSet = new Set();
  const eventDict: EventMap = {};
  logs.forEach((cur: LogSchema) => {
    const date: string = formatDate(cur.event_time);
    if (date in eventDict) {
      eventDict[date].push({
        eventId: cur.id,
        ...actMap[cur.activity_id],
      });
    } else {
      eventDict[date] = [
        {
          eventId: cur.id,
          ...actMap[cur.activity_id],
        },
      ];
    }

    timeSet.add(date);
  }, {});

  const timeArray = Array.from(timeSet) as string[];
  const eventList: EventTableRow[] = timeArray.map((v: string) => {
    return {
      time: v,
      events: eventDict[v],
    };
  });
  const htmlDOM = (
    <Html
      title="Baby Logs"
      criticalCss={process.env.NODE_ENV !== "development"}
    >
      <Activity
        eventList={eventList}
        activityDefinition={actDefs}
        selectedActivity={selectedActivity}
      />
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};

export const renderCreate = async (req: Request, res: Response) => {
  const now = new Date();
  const timeOptions: TimeOption[] = generateTimeOptions(now);
  const actDefs = (await mysql(
    "select * from activity_def"
  )) as ActivityDefinitionSchema[];
  const htmlDOM = (
    <Html
      title="Create an event"
      criticalCss={process.env.NODE_ENV !== "development"}
    >
      <CreatePage
        activityDefinition={actDefs}
        selectedActivity={[]}
        timeOptions={timeOptions}
      />
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};

export const renderCreateResult = async (req: Request, res: Response) => {
  const { time, activity } = req.body;
  if (Array.isArray(activity)) {
    activity.forEach(async (v: string) => {
      await mysql(
        `INSERT INTO logs (event_time, activity_id, child_id) VALUES (?, ?, ?)`,
        [time, v, childId]
      );
    });
  } else if (activity) {
    await mysql(
      `INSERT INTO logs (event_time, activity_id, child_id) VALUES (?, ?, ?)`,
      [time, activity, childId]
    );
  } else {
    const htmlDOM = (
      <Html title="Failed" criticalCss={process.env.NODE_ENV !== "development"}>
        <ActionResultPage error={true} />
      </Html>
    );
    const html = renderToStaticMarkup(htmlDOM);
    res.status(500);
    res.send(`<!DOCTYPE html>${html}`);
    return;
  }
  const htmlDOM = (
    <Html title="Succeed" criticalCss={process.env.NODE_ENV !== "development"}>
      <ActionResultPage error={false} />
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};

export const renderDeleteConfirm = async (req: Request, res: Response) => {
  const htmlDOM = (
    <Html
      title="Delete an event activity"
      criticalCss={process.env.NODE_ENV !== "development"}
    >
      <DeletePage
        data={{ eventId: parseInt(req.params.id), id: 2, name: "unknow" }}
      />
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};

export const renderDeleteResult = async (req: Request, res: Response) => {
  const htmlDOM = (
    <Html title="Succeed" criticalCss={process.env.NODE_ENV !== "development"}>
      <h1>delete success</h1>
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};

export const renderStatic = (req: Request, res: Response) => {
  res.sendFile(fileMap[req.params.name], { root: process.cwd() });
};
