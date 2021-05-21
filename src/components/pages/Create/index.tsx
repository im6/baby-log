import { FC } from "react";
import Html from "../../layout/Html";
import BackLink from "../../partials/BackLink";
import ActivityChkboxGroup from "../../partials/ActivityChkboxGroup";
interface CreateProps {
  selectedActivity: any;
  activityDefinition: any;
  timeOptions: any;
}
const CreatePage: FC<CreateProps> = ({
  activityDefinition,
  selectedActivity,
  timeOptions,
}) => (
  <Html title="Baby Log">
    <BackLink />
    <form action="/create-event" method="post">
      <label htmlFor="event-time">Time:</label>
      {timeOptions.map((v: any) => {
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
            <label htmlFor={id}>{v.name}</label>
          </div>
        );
      })}
      <br />
      <label htmlFor="selected-activity">Activity:</label>
      <ActivityChkboxGroup
        selected={selectedActivity}
        allData={activityDefinition}
      />
      <br />
      <input type="submit" value="Submit Event" />
    </form>
  </Html>
);

export default CreatePage;
