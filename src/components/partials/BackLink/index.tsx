import { FC } from "react";
import style from "./style.module.less";

const BackLink: FC = () => (
  <a className={style.link} href="/">
    Back to logs
  </a>
);

export default BackLink;
