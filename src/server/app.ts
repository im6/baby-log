import * as express from "express";
import {
  renderActivity,
  renderCreate,
  renderCreateResult,
  renderDeleteConfirm,
  renderDeleteResult,
  renderError,
  renderStatic,
} from "./middlewares";

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/create", renderCreate);
app.get("/delete-confirm/:id", renderDeleteConfirm);

app.post("/create-event", renderCreateResult);
app.post("/delete-event", renderDeleteResult);

app.get("/error", renderError);
app.get("/static/:name", renderStatic);
app.get("/", renderActivity);

export default app;
