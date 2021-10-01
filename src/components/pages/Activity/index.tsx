import { FC, Fragment } from "react";
import Nav from "../../partials/Nav";
import EventTable from "../../partials/EventTable";
import { ActivityDefinitionSchema, EventTableRow } from "../../../interface";
import style from "./style.module.less";

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
        <button type="button" className={style.btn}>
          &#10133; Create Event
        </button>
      </a>
      &nbsp;
      <a href="/metrics-ui">
        <button type="button" className={style.btn}>
          &#10133; Create Metric
        </button>
      </a>
    </div>
    <div className={style.layout}>
      <Nav allData={activityDefinition} selected={selectedActivity} />
      <EventTable data={eventList} />
    </div>
  </Fragment>
);

export default Activity;
