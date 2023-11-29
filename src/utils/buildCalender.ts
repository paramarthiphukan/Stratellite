import {
  endOfMonth,
  isBefore,
  startOfWeek,
  add,
  endOfWeek,
  startOfMonth,
} from "date-fns";

export default function buildCalender(today: any) {
  let endDay = endOfWeek(endOfMonth(today));
  let startDay = startOfWeek(startOfMonth(today));
  let day = startDay;

  const calender: any = [];
  while (isBefore(day, endDay)) {
    calender.push(
      Array(7)
        .fill(0)
        .map(() => {
          return (day = add(day, { days: 1 }));
        })
    );
  }
  return calender;
}
