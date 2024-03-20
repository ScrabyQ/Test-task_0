import { describe, expect, test } from "@jest/globals";
import getInterval from "../src/components/interval.js";
import { getReadableDateString } from "../src/util";
describe("getInterval module", () => {
    const compareDays = [
      {
        expected: '{"years":0,"months":10,"days":29}',
        start:    new Date(2023, 0, 11),   // 10.01.2023
        end:      new Date(2023, 11, 9),   // 08.12.2023
      },
      {
        expected: '{"years":0,"months":4,"days":18}',
        start:    new Date(2023, 2, 2),    // 01.03.2023
        end:      new Date(2023, 6 , 19),  // 18.07.2023
      },
      {
        expected: '{"years":0,"months":4,"days":29}',
        start:    new Date(2023, 0, 27),   // 26.01.2023
        end:      new Date(2023, 5, 24),   // 23.06.2023
      },
      {
        expected: '{"years":0,"months":3,"days":0}',
        start:    new Date(2023, 2, 2),    // 01.03.2023
        end:      new Date(2023, 4, 32),   // 31.05.2023
      },
      {
        expected: '{"years":0,"months":4,"days":18}',
        start:    new Date(2023, 2, 2),    // 01.03.2023
        end:      new Date(2023, 6, 19),   // 18.07.2023
      },
      {
        expected: '{"years":0,"months":6,"days":8}',
        start:    new Date(2023, 8, 26),   // 25.09.2023
        end:      new Date(2024, 3, 2),    // 01.04.2024
      },
      {
        expected: '{"years":0,"months":5,"days":24}',
        start:    new Date(2023, 3, 2),    // 01.04.2023
        end:      new Date(2023, 8, 25),   // 24.09.2023
      },
      {
        expected: '{"years":0,"months":4,"days":19}',
        start:    new Date(2023, 2, 2),    // 01.03.2023
        end:      new Date(2023, 6, 20),   // 19.07.2023
      },
      {
        expected: '{"years":0,"months":10,"days":11}',
        start:    new Date(2023, 3, 20),   // 19.04.2023
        end:      new Date(2024, 1, 30),   // 29.02.2024
      },
      {
        expected: '{"years":0,"months":11,"days":0}',
        start:    new Date(2023, 3, 2),    // 01.04.2023
        end:      new Date(2024, 1, 30),   // 29.02.2024
      },
      {
        expected: '{"years":0,"months":9,"days":0}',
        start:    new Date(2023, 5, 2),    // 01.06.2023
        end:      new Date(2024, 1, 30),   // 29.02.2024
      },
      {
        expected: '{"years":2,"months":6,"days":20}',
        start:    new Date(2024, 2, 21),   // 20.03.2024
        end:      new Date(2021, 8, 2),    // 01.09.2021
      },
      {
        expected: '{"years":3,"months":5,"days":13}',
        start:    new Date(2021, 2, 21),   // 20.03.2021
        end:      new Date(2024, 8, 2),    // 01.09.2024
      },
      {
        expected: '{"years":7,"months":5,"days":13}',
        start:    new Date(2021, 2, 21),   // 20.03.2021
        end:      new Date(2028, 8, 2),    // 01.09.2028
      },
      {
        expected: '{"years":20,"months":11,"days":8}',
        start:    new Date(2007, 7, 11),   // 10.08.2021
        end:      new Date(2028, 6, 18),   // 17.07.2028
      },
    ];
  
    compareDays.forEach(({ expected, start, end }, i) => {
      test(`${++i}. Interval between ${getReadableDateString(
        start
      )} and ${getReadableDateString(end)} should be ${expected}`, () => {
        expect(getInterval(start, end)).toBe(expected);
      });
    });
  });