import { FC, Fragment } from "react";
import Nav from "../../partials/Nav";
import EventTable from "../../partials/EventTable";
import { ActivityDefinitionSchema, EventTableRow } from "../../../interface";

interface ActivityProps {
  activityDefinition: ActivityDefinitionSchema[];
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
        <button type="button" className="wide-btn">
          &#10133; Create Event
        </button>
      </a>
    </div>
    <div className="activity-layout">
      <Nav allData={activityDefinition} selected={selectedActivity} />
      <EventTable data={eventList} />
    </div>
  </Fragment>
);

export default Activity;
