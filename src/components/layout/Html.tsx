import { FC, ReactNode } from "react";

interface HtmlProps {
  children: ReactNode;
  title: string;
}

const Html: FC<HtmlProps> = ({ children, title }) => (
  <html lang="en">
    <head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
    </head>
    <body>
      {children}
      <script src="/static/app.js" type="text/javascript" />
    </body>
  </html>
);

export default Html;
