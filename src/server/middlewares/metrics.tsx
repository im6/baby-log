import { Request, Response } from "express";
import { renderToStaticMarkup } from "react-dom/server";
import Html from "../../components/layout/Html";
import ActionResultPage from "../../components/pages/ActionResult";

const promClient = require("prom-client");

const register = promClient.register;

const counter = new promClient.Counter({
  name: "baby_track",
  help: "baby_track",
});

export const getMetrics = (req: Request, res: Response) => {
  res.status(200).set("Content-Type", "text/plain");
  register.metrics().then((a: any) => {
    res.end(a);
  });
};

export const renderMetricsUpdateResult = (req: Request, res: Response) => {
  if (req.body.amt) {
    counter.inc(parseInt(req.body.amt));
    const htmlDOM = (
      <Html
        title="Succeed"
        includeScript={false}
        criticalCss={process.env.NODE_ENV !== "development"}
      >
        <ActionResultPage
          message="Creating formula metrics successfully"
          error={false}
        />
      </Html>
    );
    const html = renderToStaticMarkup(htmlDOM);
    res.status(200);
    res.send(`<!DOCTYPE html>${html}`);
  } else {
    const htmlDOM = (
      <Html
        title="Fail"
        criticalCss={process.env.NODE_ENV !== "development"}
        includeScript={false}
      >
        <ActionResultPage message="Creating formula metrics failed" error />
      </Html>
    );
    const html = renderToStaticMarkup(htmlDOM);
    res.status(400);
    res.send(`<!DOCTYPE html>${html}`);
  }
};
