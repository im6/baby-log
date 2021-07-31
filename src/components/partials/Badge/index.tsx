import { FC } from "react";
import style from "./style.module.less";

interface BadgeProps {
  activityId: number;
  text: string;
}

const Badge: FC<BadgeProps> = ({ activityId, text }) => (
  <span className={`${style.badge} ${style[`badge-color-${activityId}`]}`}>
    {text}
  </span>
);

export default Badge;
