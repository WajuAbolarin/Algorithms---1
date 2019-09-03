import travelTime from "../src/index";
import testData from "./mocks/testData.json";
import test2 from "./mocks/test2.json";
import test3 from "./mocks/test3.json";
import test4 from "./mocks/test4.json";

describe("Time spent", () => {
  test("It returns a string", () => {
    expect(typeof travelTime(testData)).toEqual("string");
  });
  test("It returns sum of durations", () => {
    expect(travelTime(testData)).toEqual("21 hours, 55 minutes");
  });
  test("It returns sum of durations with hours missing in some", () => {
    expect(travelTime(test2)).toEqual("10 hours");
  });

  test("It returns sum of durations with minutes missing in some", () => {
    expect(travelTime(test3)).toEqual("9 hours");
  });
  test("It returns sum of durations with weird data", () => {
    expect(travelTime(test4)).toEqual("25 minutes");
  });
});
