export default function travelTime(tripData) {
  const map = fn => d => {
    let result = [];
    d.forEach(i => {
      result.push(fn(i));
    });
    return result;
  };
  const prop = key => obj => obj[key];
  const numRegex = /\d+/g;
  const hrRegex = /\d+\s+?[hH]/g;
  const mntRegex = /\d+\s+?[mM]/g;
  const toLowerCase = s => String.prototype.toLocaleLowerCase.call(s);
  const split = sep => str => String.prototype.split.call(str, sep);
  const match = reg => str => String.prototype.match.call(str, reg);
  const firstMatch = matches => (Array.isArray(matches) ? head[matches] : "");
  const trim = str => String.prototype.trim.call(str);
  const gte = limit => n => n >= limit;
  const gt = limit => n => n > limit;
  const head = arr => arr[0];
  const tail = arr => arr[arr.length - 1];
  const reduce = fn => arr => Array.prototype.reduce.call(arr, fn, 0);
  const sum = (a, b) => Number(a) + Number(b);
  const eq = limit => n => n === limit;
  const arraySum = reduce(sum);
  const greaterThan1 = gte(1);
  const greaterThan0 = gt(0);
  const equal0 = eq(0);
  const pluralize = (string, n) => (n > 1 ? `${string}s` : `${string}`);
  const isValue = x => !!x;
  const filter = predicate => arr => arr.filter(predicate);

  const getTrips = prop("trips");
  const getDurations = map(prop("duration"));
  const splitParts = split(",");
  const pickNumbers = match(numRegex);
  const getHours = match(hrRegex);
  const getMins = match(mntRegex);
  const sumNumbers = reduce(sum);
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

  const trips = getTrips(tripData);
  const durations = getDurations(trips);
  const lowerCase = map(toLowerCase);
  const durationsInLowerCase = lowerCase(durations);
  const hours = map(pickNumbers)(
    filter(isValue)(map(getHours)(durationsInLowerCase))
  );
  const minutes = map(pickNumbers)(
    filter(isValue)(map(trim)(getMins(durationsInLowerCase.map(splitParts))))
  );

  const hrsInMinutes = arraySum(map(toMinutes)(map(pickNumbers)(hours)));
  const mins = arraySum(map(pickNumbers)(minutes));
  const totalMins = sum(hrsInMinutes, mins);
  return toTimeString(trim(totalMins));
}
