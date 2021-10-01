import { FC, ReactNode } from "react";

interface HtmlProps {
  children: ReactNode;
  title: string;
  criticalCss: boolean;
  includeScript: boolean;
}

const Html: FC<HtmlProps> = ({
  children,
  title,
  criticalCss,
  includeScript,
}) => (
  <html lang="en">
    <head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <link
        rel="shortcut icon"
        href="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAABAREQAQEREAEBERABAREQBQEREBRM9XQKSQwAMs1gEhbpqCXU0KyUKAC1xAlpPNABAREQAQEREAUBERAVAREQDQEREAkBERANAREQAfF9FAAAiTAJ7UUEUwlwFgc9hA/TrfQbty2wGbmFOLhEJMF0EalUyAEBERABAREQDQEREBUBERAJAREQIQEREBd95VADBc2sR3nEmk95pBvfWYwP/9XQB//V2AfHleAeJj2coGAApYgRzUzAAQEREAEBERAFAREQAQUVEBCk4QAqcamcT34IwlPd8CfrubwH/12UE/+JpAv/oawD/5m0B99twB46SYSYXAC5kBG9PMABAREQAAAAAAKp7WQCZcWkUy4s5meuQE/r6hAX/93QB/9lnEOXKYgriz18D/9JgAv/SYQL30WYFjpZcIxgAL2QD2WsHAJxsowCFWtUMxpVOkeOmHProlxL/84gJ/+10FN7NYjZIvGMNRLpZB9m5VAT/u1QD/75WA/fLXwWMoV8jFAAQlQF6VbINhkLFgKJdkvfZnir/6qAS/92DH+DFaD1M//8AAIMAFgC4WQhEqk4H2aNJBf+xTwT/12MC9d1pBICuYRoPhU27iIU8t/SGOb7/oluM/86JPOS/dEJMES9SCTlDQgX/qAAAAAAPAK5RBkSkSgvfyFwD/9pkAf/TYwPzz2oGhoWN1XWFh9XthXXR/4do0v+Ma8vhiFvWQiQsFwM+REEMPkRFBYIS/wCcOGg5mTV12chXLv/xdAH/8YEG7eiIC3SFwegGhpLebIaA2PGFedT/h3HZ/4pf2NeJStJBKTcfAylEGgmQQW09jjanzocwvP+XPJ3/1mYy8fOCBG32oRAGhYTbAIWI2wiHgdyHh3rZ+IZr1P+JXdj/ikzX14k6x0GJR3g8iUa00YlDzv+KRNP/jkTJ9KtRhH6PXg8PABxlAkBERAIMGwABhXfbDolx3IyIZtj4h1fT/4lI1P+JPcTdi1TE14lY1/+HV9T/jFfP9KJYpH7cZi8KFjpBA0BERAVAREQCQERECCc1GQSLZ9oOil/ajIlS1/iHQ8v/hz3D/4lm2P+Kbtz/imvQ9JNjm4SjWjEOnV1ZAEBERABAREQBQEREAEBERARAREQLKTsbBIta2w6KTdaKiD7H9oU7uv+HeNb/iH/W8JNyqHuQVioOMT8/CkFERAVAREQAQEREAEBERABAREQAQEREBEBERAgmRw4Cd0W4DHw1sH+EObb1gYLN7m93s2x0PiUHcllzAEBERARAREQIQEREA0BERAAAAAAAQEREAEBERABAREQCQEREAm4onwBdJYINdTihh2tsqXYgOz0IQ1FwAEBERABAREQAQEREAkBERAJAREQAIAgAAAAAAAAQAAAAgAEAAMAAAACAAAAAAYAAAADAAAAAQAAAAAAAAIAAAAAAAAAAAAQAAIABAACAEQAAxDAAAA=="
      />

      {criticalCss && <link rel="stylesheet" href="/static/style.css" />}
    </head>
    <body>
      {children}
      {includeScript && <script src="/static/app.js" type="text/javascript" />}
    </body>
  </html>
);

export default Html;
