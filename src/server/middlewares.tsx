import { Request, Response } from "express";
import { renderToStaticMarkup } from "react-dom/server";
import mysql from "./mysql";
import Html from "../components/layout/Html";
import Activity from "../components/pages/Activity";
import CreatePage from "../components/pages/Create";
import CreateResultPage from "../components/pages/CreateResult";
import { generateTimeOptions, formatDate } from "./helper";

interface FileMap {
  [key: string]: string;
}
interface Activity {
  id: string;
  name: string;
}

const fileMap: FileMap =
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
  const actDefs: any = await mysql("select * from activity_def");

  let whereClause = null;
  let selectedActivity = null;

  const { activity } = req.query;
  if (Array.isArray(activity)) {
    selectedActivity = activity.map((v: any) => parseInt(v));
    whereClause = `WHERE activity_id in (${selectedActivity.join(",")})`;
  } else if (activity) {
    selectedActivity = [parseInt(activity.toString(), 10)];
    whereClause = `WHERE activity_id = ${activity}`;
  } else {
    selectedActivity = actDefs.map((v: any) => v.id);
    whereClause = "";
  }

  const query = `SELECT * FROM logs ${whereClause} ORDER BY event_time DESC LIMIT 200`;
  const logs: any = await mysql(query);

  const timeSet = new Set();
  const eventDict = logs.reduce((acc: any, cur: any) => {
    const date = formatDate(cur.event_time);
    timeSet.add(date);
    if (date in acc) {
      acc[date].push(cur.activity_id);
    } else {
      acc[date] = [cur.activity_id];
    }
    return acc;
  }, {});

  const eventList = Array.from(timeSet).map((v: any) => {
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
  const timeOptions = generateTimeOptions(now);
  const actDefs = await mysql("select * from activity_def");
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
      const query = `INSERT INTO logs (event_time, activity_id, child_id) VALUES ('${time}', '${v}', ${childId})`;
      await mysql(query);
    });
  } else if (activity) {
    const query = `INSERT INTO logs (event_time, activity_id, child_id) VALUES ('${time}', '${activity}', ${childId})`;
    await mysql(query);
  } else {
    const htmlDOM = (
      <Html title="Failed" criticalCss={process.env.NODE_ENV !== "development"}>
        <CreateResultPage error={true} />
      </Html>
    );
    const html = renderToStaticMarkup(htmlDOM);
    res.status(500);
    res.send(`<!DOCTYPE html>${html}`);
    return;
  }
  const htmlDOM = (
    <Html title="Succeed" criticalCss={process.env.NODE_ENV !== "development"}>
      <CreateResultPage error={false} />
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};

export const renderStatic = (req: Request, res: Response) => {
  res.sendFile(fileMap[req.params.name], { root: process.cwd() });
};
