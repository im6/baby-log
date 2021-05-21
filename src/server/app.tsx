import * as express from "express";
import {
  renderActivity,
  renderCreate,
  renderCreateResult,
  renderStatic,
} from "./middlewares";

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/static/:name", renderStatic);
app.get("/create", renderCreate);
app.post("/create-event", renderCreateResult);
app.get("/", renderActivity);

export default app;
