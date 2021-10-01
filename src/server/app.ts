import * as express from "express";
import {
  renderActivity,
  renderCreate,
  renderCreateResult,
  renderDeleteConfirm,
  renderDeleteResult,
  renderError,
  renderMetrics,
} from "./middlewares/view";
import { getMetrics, renderMetricsUpdateResult } from "./middlewares/metrics";
import { renderStatic } from "./middlewares/static";

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/metrics", getMetrics);
app.get("/metrics-ui", renderMetrics);
app.post("/metrics", renderMetricsUpdateResult);

app.get("/create", renderCreate);
app.get("/delete-confirm/:id", renderDeleteConfirm);

app.post("/create-event", renderCreateResult);
app.post("/delete-event", renderDeleteResult);

app.get("/error", renderError);
app.get("/static/:name", renderStatic);
app.get("/", renderActivity);

export default app;
