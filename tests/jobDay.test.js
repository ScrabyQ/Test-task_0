import { describe, expect, test } from "@jest/globals";
import getJobDay from "../src/components/jobDay.js";
import { getReadableDateString } from "../src/util";

describe("workDay module", () => {
  const compareDays = [
    { expected: "2023-02-27", input: new Date(2023, 1, 24) },
    { expected: "2023-02-27", input: new Date(2023, 1, 25) },
    { expected: "2023-02-27", input: new Date(2023, 1, 26) },
    { expected: "2023-02-27", input: new Date(2023, 1, 27) },
    { expected: "2023-02-27", input: new Date(2023, 1, 28) },
    { expected: "2023-02-28", input: new Date(2023, 1, 29) },
    { expected: "2023-03-01", input: new Date(2023, 1, 30) },
    { expected: "2023-03-02", input: new Date(2023, 2, 3) },
    { expected: "2023-03-03", input: new Date(2023, 2, 4) },
    { expected: "2023-03-06", input: new Date(2023, 2, 5) },
    { expected: "2023-03-06", input: new Date(2023, 2, 6) },
    { expected: "2023-03-06", input: new Date(2023, 2, 7) },
    { expected: "2023-03-09", input: new Date(2023, 2, 8) },
    { expected: "2023-03-09", input: new Date(2023, 2, 9) },
    { expected: "2023-03-09", input: new Date(2023, 2, 10) },
    { expected: "2023-03-10", input: new Date(2023, 2, 11) },
    { expected: "2023-03-13", input: new Date(2023, 2, 12) },
    { expected: "2023-03-13", input: new Date(2023, 2, 13) },
    { expected: "2023-03-13", input: new Date(2023, 2, 14) },
  ];

  compareDays.forEach(({ input, expected }, i) => {
    test(`${++i}. ${getReadableDateString(input)} should be ${expected}`, () => {
      expect(getJobDay(input)).toBe(expected);
    });
  });
});
