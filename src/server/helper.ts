import { add, format } from "date-fns";

const generateDatePair = (dateObj: Date, showNow: boolean) => {
  const dayStr = `${dateObj.getFullYear()}-${
    dateObj.getMonth() + 1
  }-${dateObj.getDate()}`;

  const minValue = dateObj.getMinutes();

  const minuteDisplay = minValue < 10 ? `0${minValue}` : minValue;

  return {
    id: `${dayStr} ${dateObj.getHours()}:${minuteDisplay}:00`,
    name: `${dateObj.getHours()}:${minuteDisplay}${showNow ? " (now)" : ""}`,
    isNow: showNow,
  };
};

export const generateTimeOptions = (now: Date) => {
  const yearVal = now.getFullYear();
  const monthVal = now.getMonth();
  const getDate = now.getDate();
  const hourVal = now.getHours();
  const minVal = now.getMinutes();
  const floorMin = Math.floor(minVal / 10) * 10;
  const isFloorMin = floorMin === minVal;
  const date0 = add(
    new Date(yearVal, monthVal, getDate, hourVal, floorMin, 0),
    {
      minutes: -30,
    }
  );
  const date1 = add(
    new Date(yearVal, monthVal, getDate, hourVal, floorMin, 0),
    {
      minutes: -20,
    }
  );
  const date2 = add(
    new Date(yearVal, monthVal, getDate, hourVal, floorMin, 0),
    {
      minutes: -10,
    }
  );
  const date3 = new Date(yearVal, monthVal, getDate, hourVal, floorMin, 0);
  const date3Now = new Date(yearVal, monthVal, getDate, hourVal, minVal, 0);
  const date4 = add(
    new Date(yearVal, monthVal, getDate, hourVal, floorMin, 0),
    {
      minutes: 10,
    }
  );
  const date5 = add(
    new Date(yearVal, monthVal, getDate, hourVal, floorMin, 0),
    {
      minutes: 20,
    }
  );

  let dateOptions = [
    generateDatePair(date0, false),
    generateDatePair(date1, false),
    generateDatePair(date2, false),
    generateDatePair(date3, isFloorMin),
    generateDatePair(date3Now, true),
    generateDatePair(date4, false),
    generateDatePair(date5, false),
  ];
  if (isFloorMin) {
    dateOptions = dateOptions.filter((_, k) => {
      return k !== 4;
    });
  }

  return dateOptions;
};

export const formatDate = (rawDate: Date) => {
  return format(rawDate, "yyyy-MM-dd HH:mm");
};
