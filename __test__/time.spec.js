import travelTime from "../src/index";

import testData from "./mocks/testData.json";

describe("Time spent", () => {
  test("It returns a string", () => {
    expect(typeof travelTime(testData)).toEqual("string");
  });
  test("It returns sum of durations", () => {
    expect(travelTime(testData)).toEqual("21 hours, 55 minutes");
  });
});
