import { FC } from "react";
import ActivityChkboxGroup from "../ActivityChkboxGroup";
import { ActivityDefinitionSchema } from "../../../interface";

interface NavProps {
  allData: ActivityDefinitionSchema[];
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
