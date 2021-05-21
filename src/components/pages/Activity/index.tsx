import { FC } from "react";
import Html from "../../layout/Html";
//import Nav from "../../partials/Nav";
import EventTable from "../../partials/EventTable";

interface ActivityProps {
  activityDefinition: any;
  selectedActivity: any;
  eventList: any;
}

const Activity: FC<ActivityProps> = ({
  activityDefinition,
  selectedActivity,
  eventList,
}) => (
  <Html title="Baby Log">
    <div>
      <a href="/create">
        <button type="button" className="create-btn">
          &#10133; Create Event
        </button>
      </a>
    </div>
    <div className="activity-layout">
      {/* <Nav allData={activityDefinition} selected={selectedActivity} /> */}
      <EventTable data={eventList} activityDef={activityDefinition} />
    </div>
  </Html>
);

export default Activity;
