import { Request, Response } from "express";

const fileMap: Record<string, string> =
  process.env.NODE_ENV === "development"
    ? {
        "app.js": "./local/client/index.js",
      }
    : {
        "app.js": "./dist/client/index.js",
        "style.css": "./dist/client/main.css",
      };

export const renderStatic = (req: Request, res: Response) => {
  res.sendFile(fileMap[req.params.name], { root: process.cwd() });
};
