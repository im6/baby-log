import { FC } from "react";

interface ActivityChkboxGroupProps {
  allData: any;
  selected: any;
}

const ActivityChkboxGroup: FC<ActivityChkboxGroupProps> = ({
  allData,
  selected,
}) => {
  return (
    <div className="activity-chkbox-group">
      {allData.map((v: any) => {
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
