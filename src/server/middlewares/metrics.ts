import { Request, Response } from "express";
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

export const updateMetric = (req: Request, res: Response) => {
  counter.inc(10);
  console.log(req.body);
  res.send({ error: 0 });
};
