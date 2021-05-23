import { FC, Fragment } from "react";
import Nav from "../../partials/Nav";
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
  <Fragment>
    <div>
      <a href="/create">
        <button type="button" className="create-btn">
          &#10133; Create Event
        </button>
      </a>
    </div>
    <div className="activity-layout">
      <Nav allData={activityDefinition} selected={selectedActivity} />
      <EventTable data={eventList} activityDef={activityDefinition} />
    </div>
  </Fragment>
);

export default Activity;
