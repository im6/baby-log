import app from "./app";
import { port } from "./config";

app.listen(port, () => {
  console.log(`app is running on: http://localhost:${port}`);
});
