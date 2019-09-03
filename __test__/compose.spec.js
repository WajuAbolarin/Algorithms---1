import { compose, curry } from "./../src/utils";
describe("Compose & Curry utility", () => {
  test("Pipelines some functions", () => {
    let toUpper = x => x.toUpperCase();
    let exclaim = x => `${x}!!!`;

    expect(
      compose(
        exclaim,
        toUpper
      )("hello")
    ).toEqual("HELLO!!!");
  });

  test("Currying", () => {
    let normalSum = (a, b) => a + b;
    let curriedSum = curry(normalSum);
    let plus10 = curriedSum(10);
    expect(plus10(2)).toEqual(normalSum(10, 2));
  });
});
