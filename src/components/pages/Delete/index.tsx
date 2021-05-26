import { FC, Fragment } from "react";
import BackLink from "../../partials/BackLink";
import { EventActivity } from "../../../interface";

interface DeleteProps {
  data: EventActivity;
}

const DeletePage: FC<DeleteProps> = ({ data }) => (
  <Fragment>
    <BackLink />
    <form action="/delete-event" method="post">
      <div className="create-layout">delete layout {JSON.stringify(data)}</div>
      <input
        className="create-btn"
        type="submit"
        value="&#9940; Delete Event"
      />
    </form>
  </Fragment>
);

export default DeletePage;
