import { FC } from "react";
import ActivityChkboxGroup from "../ActivityChkboxGroup";
import { ActivityDefinitionSchema } from "../../../interface";
import style from "./style.module.less";

interface NavProps {
  allData: ActivityDefinitionSchema[];
  selected: number[];
}

const Nav: FC<NavProps> = ({ allData, selected }) => {
  return (
    <form className={style.nav} action="/">
      <ActivityChkboxGroup showTwoCol allData={allData} selected={selected} />
      <input type="submit" value="&#128269; Filter" />
    </form>
  );
};

export default Nav;
