export interface ActivityDef {
  id: number;
  name: string;
}

export interface TimeOption {
  id: string;
  name: string;
  isNow: boolean;
}

export interface EventTableRow {
  time: string;
  events: number[];
}
