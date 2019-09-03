import {
  prop,
  map,
  match,
  toLowerCase,
  trim,
  gt,
  sum,
  arraySum,
  pluralize,
  isValue,
  filter,
  compose,
  tap
} from "./utils";

export default function travelTime(tripData) {
  const greaterThan0 = gt(0);
  const pickNumbers = match(/\d+/g);
  const getHours = match(/\d+\s+?[hH]/g);
  const getMins = match(/\d+\s+?[mM]/g);
  const toMinutes = h => Number(h) * 60;
  const toTimeString = mins => {
    let hrs = Math.floor(mins / 60);
    let minutes = mins % 60;
    let hrString = greaterThan0(hrs) ? `${hrs} ${pluralize("hour", hrs)}` : "";
    let mntString = greaterThan0(minutes)
      ? `${minutes} ${pluralize("minute", minutes)}`
      : "";

    return trim(`${hrString} ${mntString}`).replace(/(hours?)\s/, "$1, ");
  };

  const getNumbers = compose(
    map(pickNumbers),
    filter(isValue)
  );

  const durationsInLowerCase = compose(
    map(toLowerCase),
    map(prop("duration")),
    prop("trips")
  );

  const hoursInMinutes = compose(
    arraySum,
    map(toMinutes),
    getNumbers,
    filter(isValue),
    getHours,
    durationsInLowerCase
  );
  const minutes = compose(
    arraySum,
    getNumbers,
    getMins,
    durationsInLowerCase
  );

  return toTimeString(sum(hoursInMinutes(tripData), minutes(tripData)));
}
