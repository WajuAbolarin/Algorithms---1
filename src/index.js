export default function travelTime(tripData) {
  const map = fn => d => {
    let result = [];
    d.forEach(i => {
      result.push(fn(i));
    });
    return result;
  };
  const prop = key => obj => obj[key];
  const Regex = /\d+/g;
  const toLowerCase = s => String.prototype.toLocaleLowerCase.call(s);
  const split = sep => str => String.prototype.split.call(str, sep);
  const match = reg => str => String.prototype.match.call(str, reg)[0];
  const trim = str => String.prototype.trim.call(str);
  const gte = limit => n => n >= limit;
  const head = arr => arr[0];
  const tail = arr => arr[arr.length - 1];
  const reduce = fn => arr => Array.prototype.reduce.call(arr, fn, 0);
  const sum = (a, b) => Number(a) + Number(b);
  const eq = limit => n => n === limit;
  const arraySum = reduce(sum);
  const greaterThan1 = gte(1);
  const equal1 = eq(1);

  const getTrips = prop("trips");
  const getDurations = map(prop("duration"));
  const splitParts = split(",");
  const pickNumbers = match(Regex);
  const getHours = map(head);
  const getMins = map(tail);
  const sumNumbers = reduce(sum);
  const toMinutes = h => Number(h) * 60;
  const toTimeString = mins => {
    let hrs = Math.floor(mins / 60);
    let minutes = mins % 60;

    return `${greaterThan1(hrs) ? hrs : ""} ${
      equal1(hrs) ? "hour" : "hours"
    }, ${greaterThan1(minutes) ? minutes : ""} ${
      equal1(minutes) ? "minute" : "minutes"
    }`;
  };

  const trips = getTrips(tripData);
  const durations = getDurations(trips);
  const lowerCase = map(toLowerCase);
  const durationsInLowerCase = lowerCase(durations);
  const hours = map(trim)(getHours(durationsInLowerCase.map(splitParts)));
  const minutes = map(trim)(getMins(durationsInLowerCase.map(splitParts)));
  const hrsInMinutes = arraySum(map(toMinutes)(map(pickNumbers)(hours)));
  const mins = arraySum(map(pickNumbers)(minutes));
  const totalMins = sum(hrsInMinutes, mins);

  return toTimeString(totalMins);
}
