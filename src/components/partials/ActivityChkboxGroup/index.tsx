import { FC } from "react";
import { ActivityDef } from "../../../interface";

interface ActivityChkboxGroupProps {
  allData: ActivityDef[];
  selected: number[];
}

const ActivityChkboxGroup: FC<ActivityChkboxGroupProps> = ({
  allData,
  selected,
}) => {
  return (
    <div className="activity-chkbox-group">
      {allData.map((v: ActivityDef) => {
        return (
          <div key={v.id}>
            <input
              type="checkbox"
              id={`nav-chkbox-option-${v.id}`}
              name="activity"
              value={v.id}
              defaultChecked={selected.includes(v.id)}
            />
            <label
              className={`badge badge-color-${v.id}`}
              htmlFor={`nav-chkbox-option-${v.id}`}
            >
              {v.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityChkboxGroup;
