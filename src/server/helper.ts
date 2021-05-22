import { add, format } from "date-fns";

const minDiffOptions = [
  -100, -90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20,
];

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

  const nowBase = new Date(yearVal, monthVal, getDate, hourVal, minVal, 0);
  const floorBase = new Date(yearVal, monthVal, getDate, hourVal, floorMin, 0);

  const dateOptions = minDiffOptions.map((v: number) => {
    const timeVal = add(floorBase, {
      minutes: v,
    });
    return generateDatePair(timeVal, v === 0 && isFloorMin);
  });

  if (!isFloorMin) {
    const insertIndex = minDiffOptions.indexOf(0) + 1;
    dateOptions.splice(insertIndex, 0, generateDatePair(nowBase, true));
  }

  return dateOptions;
};

export const formatDate = (rawDate: Date) => {
  return format(rawDate, "yyyy-MM-dd HH:mm");
};
