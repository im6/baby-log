import { FC, Fragment } from "react";
import BackLink from "../../partials/BackLink";
import { EventActivity } from "../../../interface";
import { formatDate } from "../../../helper";

const DeletePage: FC<EventActivity> = ({
  id,
  event_time,
  activity_id,
  activity_name,
}) => (
  <Fragment>
    <BackLink />
    <form action="/delete-event" method="post">
      <div className="delete-layout">
        <h3>
          &#9995; Are you sure you want to DELETE&nbsp;
          <span className={`badge badge-color-${activity_id}`}>
            {activity_name}
          </span>
          &nbsp;at <u>{formatDate(event_time)}</u>?
        </h3>
        <input type="hidden" name="id" value={id} />
      </div>
      <input className="wide-btn" type="submit" value="&#9940; Delete Event" />
    </form>
  </Fragment>
);

export default DeletePage;
