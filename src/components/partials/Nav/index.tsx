import { FC } from "react";
import ActivityChkboxGroup from "../ActivityChkboxGroup";

interface NavProps {
  allData: any;
  selected: number[];
}

const Nav: FC<NavProps> = ({ allData, selected }) => {
  return (
    <form className="nav-form" action="/">
      <ActivityChkboxGroup allData={allData} selected={selected} />
      <input type="submit" value="Filter" />
    </form>
  );
};

export default Nav;
