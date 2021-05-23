import { createConnection } from "mysql";

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  require("dotenv").config({
    path: "../vp.env",
  });
}

const {
  SQL_HOST: host,
  SQL_USERNAME: user,
  SQL_PASSWORD: password,
} = process.env;

export default (qr: string) =>
  new Promise((resolve, reject) => {
    const conn = createConnection({
      host,
      user,
      password,
      database: "baby_log",
    });
    conn.query(qr, (error: Error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    conn.end();
  });
