import { FC, Fragment } from "react";
import Nav from "../../partials/Nav";
import EventTable from "../../partials/EventTable";
import WideButton from "../../partials/WideButton";
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
        <WideButton type="button">&#10133; Create Event</WideButton>
      </a>
    </div>
    <div className={style.layout}>
      <Nav allData={activityDefinition} selected={selectedActivity} />
      <EventTable data={eventList} />
    </div>
  </Fragment>
);

export default Activity;
