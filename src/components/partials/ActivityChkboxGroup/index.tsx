import { FC } from "react";
import classnames from "classnames";
import { ActivityDefinitionSchema } from "../../../interface";
import Badge from "../Badge";
import style from "./style.module.less";

interface ActivityChkboxGroupProps {
  allData: ActivityDefinitionSchema[];
  selected: number[];
  showTwoCol: boolean;
}

const ActivityChkboxGroup: FC<ActivityChkboxGroupProps> = ({
  allData,
  selected,
  showTwoCol,
}) => {
  const topStyle = classnames(style.chkBoxGroup, {
    [style.twoCol]: showTwoCol,
  });
  return (
    <div className={topStyle}>
      {allData.map((v: ActivityDefinitionSchema) => {
        return (
          <div key={v.id}>
            <input
              type="checkbox"
              id={`nav-chkbox-option-${v.id}`}
              name="activity"
              value={v.id}
              defaultChecked={selected.includes(v.id)}
            />
            <label htmlFor={`nav-chkbox-option-${v.id}`}>
              <Badge activityId={v.id} text={v.name} />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityChkboxGroup;
