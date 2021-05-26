import { FC } from "react";
import { EventActivity, EventTableRow } from "../../../interface";

interface EventTableProps {
  data: EventTableRow[];
}

const EventTable: FC<EventTableProps> = ({ data }) => (
  <table className="activity-table">
    {data.map((v: EventTableRow) => {
      return (
        <tr key={v.time}>
          <td>{v.time}</td>
          <td>
            {v.events.map((v1: EventActivity) => {
              return (
                <a href={`/delete-confirm/${v1.id}`} key={v1.id}>
                  <span className={`badge badge-color-${v1.activity_id}`}>
                    {v1.activity_name}
                  </span>
                </a>
              );
            })}
          </td>
        </tr>
      );
    })}
  </table>
);

export default EventTable;
