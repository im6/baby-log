import { FC, Fragment } from "react";
import BackLink from "../../partials/BackLink";
import ActivityChkboxGroup from "../../partials/ActivityChkboxGroup";
import WideButton from "../../partials/WideButton";
import { ActivityDefinitionSchema, TimeOption } from "../../../interface";
import style from "./style.module.less";

interface CreateProps {
  selectedActivity: number[];
  activityDefinition: ActivityDefinitionSchema[];
  timeOptions: TimeOption[];
}

const CreatePage: FC<CreateProps> = ({
  activityDefinition,
  selectedActivity,
  timeOptions,
}) => (
  <Fragment>
    <BackLink />
    <form action="/create-event" method="post">
      <div className={style.layout}>
        <div>
          <label htmlFor="event-time">Time</label>
          <div className={style.timeList}>
            {timeOptions.map((v: TimeOption) => {
              const id = `time-options-${v.id}`;
              return (
                <div key={id}>
                  <input
                    type="radio"
                    id={id}
                    name="time"
                    value={v.id}
                    defaultChecked={v.isNow}
                  />
                  <label className={style.createTime} htmlFor={id}>
                    {v.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="selected-activity">Activity</label>
          <ActivityChkboxGroup
            selected={selectedActivity}
            allData={activityDefinition}
          />
        </div>
      </div>
      <WideButton type="submit">&#128316; Submit Event</WideButton>
    </form>
  </Fragment>
);

export default CreatePage;
