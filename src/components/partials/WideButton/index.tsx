import { FC, ReactChild } from "react";
import style from "./style.module.less";

interface WideButtonProps {
  type: "button" | "submit";
  children: ReactChild;
}

const WideButton: FC<WideButtonProps> = ({ type, children }) => (
  <button type={type} className={style.btn}>
    {children}
  </button>
);

export default WideButton;
