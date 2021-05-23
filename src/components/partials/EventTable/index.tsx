import { FC } from "react";
import { ActivityDef, EventTableRow } from "../../../interface";

interface EventTableProps {
  data: EventTableRow[];
  activityDef: ActivityDef[];
}

const EventTable: FC<EventTableProps> = ({ data, activityDef }) => {
  const actMap = activityDef.reduce((acc: any, cur: ActivityDef) => {
    acc[cur.id] = cur.name;
    return acc;
  }, {});
  return (
    <table className="activity-table">
      <tr>
        <th>Time</th>
        <th>Event</th>
      </tr>
      {data.map((v: EventTableRow) => {
        return (
          <tr key={v.time}>
            <td>{v.time}</td>
            <td>
              {v.events.map((v1: number) => {
                return (
                  <span className={`badge badge-color-${v1}`} key={v1}>
                    {actMap[v1]}
                  </span>
                );
              })}
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default EventTable;
