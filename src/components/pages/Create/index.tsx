import { FC, Fragment } from "react";
import BackLink from "../../partials/BackLink";
import ActivityChkboxGroup from "../../partials/ActivityChkboxGroup";
import { TimeOption } from "../../../interface";

interface CreateProps {
  selectedActivity: number[];
  activityDefinition: any;
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
      <div className="create-layout">
        <div>
          <label htmlFor="event-time">
            <h3>Time</h3>
          </label>
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
                <label className="create-time" htmlFor={id}>
                  {v.name}
                </label>
              </div>
            );
          })}
        </div>

        <div>
          <label htmlFor="selected-activity">
            <h3>Activity</h3>
          </label>
          <ActivityChkboxGroup
            selected={selectedActivity}
            allData={activityDefinition}
          />
        </div>
      </div>
      <input
        className="create-btn"
        type="submit"
        value="&#128316; Submit Event"
      />
    </form>
  </Fragment>
);

export default CreatePage;
