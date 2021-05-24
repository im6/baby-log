import { FC } from "react";
import { ActivityDefinitionSchema, EventTableRow } from "../../../interface";

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
            {v.events.map((v1: ActivityDefinitionSchema) => {
              return (
                <span className={`badge badge-color-${v1.id}`} key={v1.id}>
                  {v1.name}
                </span>
              );
            })}
          </td>
        </tr>
      );
    })}
  </table>
);

export default EventTable;
