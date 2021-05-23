import { FC } from "react";
import ActivityChkboxGroup from "../ActivityChkboxGroup";
import { ActivityDef } from "../../../interface";

interface NavProps {
  allData: ActivityDef[];
  selected: number[];
}

const Nav: FC<NavProps> = ({ allData, selected }) => {
  return (
    <form className="nav-form" action="/">
      <ActivityChkboxGroup allData={allData} selected={selected} />
      <input type="submit" value="&#128269; Filter" />
    </form>
  );
};

export default Nav;
