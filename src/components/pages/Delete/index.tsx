import { FC, Fragment } from "react";
import BackLink from "../../partials/BackLink";
import WideButton from "../../partials/WideButton";
import Badge from "../../partials/Badge";
import { EventActivity } from "../../../interface";
import { formatDate } from "../../../helper";
import style from "./style.module.less";

const DeletePage: FC<EventActivity> = ({
  id,
  event_time,
  activity_id,
  activity_name,
}) => (
  <Fragment>
    <BackLink />
    <form action="/delete-event" method="post">
      <div className={style.layout}>
        <h3>
          &#9995; Are you sure you want to DELETE&nbsp;
          <Badge activityId={activity_id} text={activity_name} />
          &nbsp;at <u>{formatDate(event_time)}</u>?
        </h3>
        <input type="hidden" name="id" value={id} />
      </div>
      <WideButton type="submit">&#9940; Delete Event</WideButton>
    </form>
  </Fragment>
);

export default DeletePage;
