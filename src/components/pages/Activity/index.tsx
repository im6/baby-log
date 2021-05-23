import { FC, Fragment } from "react";
import Nav from "../../partials/Nav";
import EventTable from "../../partials/EventTable";
import { EventTableRow } from "../../../interface";

interface ActivityProps {
  activityDefinition: any;
  selectedActivity: number[];
  eventList: EventTableRow[];
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
