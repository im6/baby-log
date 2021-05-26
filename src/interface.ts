// database schema
export interface ActivityDefinitionSchema {
  id: number;
  name: string;
}

export interface LogSchema {
  id: number;
  event_time: Date;
  activity_id: number;
  activity_value: number;
  child_id: number;
}

// application scope model
export interface TimeOption {
  id: string;
  name: string;
  isNow: boolean;
}

export interface EventActivity extends LogSchema {
  activity_name: string;
}

export interface EventTableRow {
  time: string;
  events: EventActivity[];
}

export interface EventMap {
  [index: string]: EventActivity[];
}
