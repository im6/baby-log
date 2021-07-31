import { FC } from "react";
import { EventActivity, EventTableRow } from "../../../interface";
import Badge from "../Badge";
import style from "./style.module.less";

interface EventTableProps {
  data: EventTableRow[];
}

const EventTable: FC<EventTableProps> = ({ data }) => (
  <table className={style.table}>
    {data.map((v: EventTableRow) => {
      return (
        <tr key={v.time}>
          <td>{v.time}</td>
          <td>
            {v.events.map((v1: EventActivity) => {
              return (
                <a href={`/delete-confirm/${v1.id}`} key={v1.id}>
                  <Badge activityId={v1.activity_id} text={v1.activity_name} />
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
