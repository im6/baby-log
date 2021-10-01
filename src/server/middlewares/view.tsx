import { Request, Response } from "express";
import { renderToStaticMarkup } from "react-dom/server";
import mysql from "../mysql";
import Html from "../../components/layout/Html";
import Activity from "../../components/pages/Activity";
import CreatePage from "../../components/pages/Create";
import DeletePage from "../../components/pages/Delete";
import MetricsPage from "../../components/pages/Metrics";
import ActionResultPage from "../../components/pages/ActionResult";
import { generateTimeOptions, formatDate } from "../../helper";
import {
  ActivityDefinitionSchema,
  EventActivity,
  EventMap,
  EventTableRow,
  LogSchema,
  TimeOption,
} from "../../interface";

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

  const query = `SELECT * FROM logs ${whereClause} ORDER BY event_time DESC LIMIT 100`;
  const logs = (await mysql(query)) as LogSchema[];

  const timeSet = new Set();
  const eventDict: EventMap = {};
  logs.forEach((cur: LogSchema) => {
    const date: string = formatDate(cur.event_time);
    if (date in eventDict) {
      eventDict[date].push({
        activity_name: actMap[cur.activity_id].name,
        ...cur,
      });
    } else {
      eventDict[date] = [
        {
          activity_name: actMap[cur.activity_id].name,
          ...cur,
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
      includeScript={false}
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
      includeScript={false}
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
      <Html
        title="Failed"
        criticalCss={process.env.NODE_ENV !== "development"}
        includeScript={false}
      >
        <ActionResultPage message="Creating event failed" error />
      </Html>
    );
    const html = renderToStaticMarkup(htmlDOM);
    res.status(500);
    res.send(`<!DOCTYPE html>${html}`);
    return;
  }
  const htmlDOM = (
    <Html
      title="Succeed"
      criticalCss={process.env.NODE_ENV !== "development"}
      includeScript={false}
    >
      <ActionResultPage message="Creating event succeeded" error={false} />
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};

export const renderDeleteConfirm = async (req: Request, res: Response) => {
  const targetLogRows = (await mysql(
    `SELECT
      a1.*, a2.name as activity_name
    FROM logs a1 LEFT JOIN activity_def a2
      ON a1.activity_id = a2.id
    WHERE a1.id = ?`,
    [req.params.id]
  )) as EventActivity[];
  if (targetLogRows.length !== 1) {
    res.redirect("/error");
    return;
  }
  const eventRow = targetLogRows[0];
  const viewModel: EventActivity = {
    id: parseInt(req.params.id, 10),
    event_time: eventRow.event_time,
    activity_id: eventRow.activity_id,
    activity_name: eventRow.activity_name,
    activity_value: eventRow.activity_value,
    child_id: eventRow.child_id,
  };

  const htmlDOM = (
    <Html
      title="Delete an event activity"
      criticalCss={process.env.NODE_ENV !== "development"}
      includeScript={false}
    >
      <DeletePage {...viewModel} />
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};

export const renderDeleteResult = async (req: Request, res: Response) => {
  try {
    await mysql(`DELETE from logs WHERE id = ?`, [req.body.id]);

    const htmlDOM = (
      <Html
        title="Successfully "
        criticalCss={process.env.NODE_ENV !== "development"}
        includeScript={false}
      >
        <ActionResultPage message="Deleting event succeeded" error={false} />
      </Html>
    );
    const html = renderToStaticMarkup(htmlDOM);
    res.status(200);
    res.send(`<!DOCTYPE html>${html}`);
  } catch (error) {
    const htmlDOM = (
      <Html
        title="Failed"
        criticalCss={process.env.NODE_ENV !== "development"}
        includeScript={false}
      >
        <ActionResultPage message="Deleting event failed" error />
      </Html>
    );
    const html = renderToStaticMarkup(htmlDOM);
    res.status(500);
    res.send(`<!DOCTYPE html>${html}`);
  }
};

export const renderError = (req: Request, res: Response) => {
  const htmlDOM = (
    <Html
      title="Failed"
      criticalCss={process.env.NODE_ENV !== "development"}
      includeScript={false}
    >
      <ActionResultPage message="Bad Request" error />
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(400);
  res.send(`<!DOCTYPE html>${html}`);
};

export const renderMetrics = (req: Request, res: Response) => {
  const htmlDOM = (
    <Html
      title="Log Baby Metrics"
      criticalCss={process.env.NODE_ENV !== "development"}
      includeScript
    >
      <MetricsPage />
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.send(`<!DOCTYPE html>${html}`);
};
