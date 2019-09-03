export const map = fn => d => {
  let result = [];
  d.forEach(i => {
    result.push(fn(i));
  });
  return result;
};
export const prop = curry((key, obj) => obj[key]);

export const toLowerCase = s => String.prototype.toLocaleLowerCase.call(s);
export const split = curry((sep, str) => String.prototype.split.call(str, sep));
export const match = curry((reg, str) => String.prototype.match.call(str, reg));
export const firstMatch = matches =>
  Array.isArray(matches) ? head[matches] : "";

export const trim = str => String.prototype.trim.call(str);
export const gte = limit => n => n >= limit;
export const gt = curry((limit, n) => n > limit);
export const head = arr => arr[0];
export const tail = arr => arr[arr.length - 1];
export const reduce = curry((fn, arr) =>
  Array.prototype.reduce.call(arr, fn, 0)
);
export const sum = curry((a, b) => Number(a) + Number(b));
export const eq = curry((limit, n) => n === limit);
export const arraySum = reduce(sum);
export const pluralize = curry((string, n) =>
  n > 1 ? `${string}s` : `${string}`
);
export const isValue = x => !!x;
export const filter = curry((predicate, arr) =>
  Array.isArray(arr) ? arr.filter(predicate) : []
);

export const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
export function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}
export const tap = x => {
  console.log(x);
  return x;
};
