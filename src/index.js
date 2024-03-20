import getJobDay from "./components/jobDay.js";
import getInterval from "./components/interval.js";
import { getReadableDateString } from "./util/index.js";

console.log("Вывод результатов функции getInterval.");
console.log("==================================");


const intervalInput = [
  {
    start: new Date(2023, 1 - 1, 10 + 1), // 10.01.2023
    end: new Date(2023, 12 - 1, 8 + 1),   // 08.12.2023
  },
  {
    start: new Date(2023, 3 - 1, 1 + 1),  // 01.03.2023
    end: new Date(2023, 7 - 1, 18 + 1),   // 18.07.2023
  },
  {
    start: new Date(2023, 1 - 1, 26 + 1), // 26.01.2023
    end: new Date(2023, 6 - 1, 23 + 1),   // 23.06.2023
  },
  {
    start: new Date(2023, 3 - 1, 1 + 1),  // 01.03.2023
    end: new Date(2023, 5 - 1, 31 + 1),   // 31.05.2023
  },
  {
    start: new Date(2023, 3 - 1, 1 + 1),  // 01.03.2023
    end: new Date(2023, 7 - 1, 18 + 1),   // 18.07.2023
  },
  {
    start: new Date(2023, 9 - 1, 25 + 1), // 25.09.2023
    end: new Date(2024, 4 - 1, 1 + 1),    // 01.04.2024
  },
  {
    start: new Date(2023, 4 - 1, 1 + 1),  // 01.04.2023
    end: new Date(2023, 9 - 1, 24 + 1),   // 24.09.2023
  },
  {
    start: new Date(2023, 3 - 1, 1 + 1),  // 01.03.2023
    end: new Date(2023, 7 - 1, 19 + 1),   // 19.07.2023
  },
  {
    start: new Date(2023, 4 - 1, 19 + 1), // 19.04.2023
    end: new Date(2024, 2 - 1, 29 + 1),   // 29.02.2024
  },
  {
    start: new Date(2023, 4 - 1, 1 + 1),  // 01.04.2023
    end: new Date(2024, 2 - 1, 29 + 1),   // 29.02.2024
  },
  {
    start: new Date(2023, 6 - 1, 1 + 1),  // 01.06.2023
    end: new Date(2024, 2 - 1, 29 + 1),   // 29.02.2024
  },
  {
    start: new Date(2023, 6 - 1, 1 + 1),  // 01.06.2023
    end: new Date(2026, 2 - 1, 28 + 1),   // 28.02.2026
  },
];

intervalInput.forEach(({ start, end }) => {
  console.log(
    `Разница между датами ${getReadableDateString(
      start
    )} - ${getReadableDateString(end)} составляет ${getInterval(start, end)}`
  );
});

console.log("==================================");
console.log("Вывод результатов функции getJobDay.");
console.log("==================================");

const jobDayInput = [
   new Date(2023, 1, 24),
   new Date(2023, 1, 25),
   new Date(2023, 1, 26) ,
   new Date(2023, 1, 27) ,
   new Date(2023, 1, 28) ,
   new Date(2023, 1, 29) ,
   new Date(2023, 1, 30) ,
   new Date(2023, 2, 3) ,
   new Date(2023, 2, 4) ,
   new Date(2023, 2, 5) ,
   new Date(2023, 2, 6) ,
   new Date(2023, 2, 7) ,
   new Date(2023, 2, 8) ,
   new Date(2023, 2, 9) ,
   new Date(2023, 2, 10) ,
   new Date(2023, 2, 11) ,
   new Date(2023, 2, 12) ,
   new Date(2023, 2, 13) ,
   new Date(2023, 2, 14) ,
];

jobDayInput.forEach(i => {
    const jobDay = getJobDay(i);
    const status = jobDay === getReadableDateString(i);
    console.log(`Попытка поставить дедлайн на ${
      getReadableDateString(i)
    } ${
      status ? "завершена успешно." :  "не удалась."
    } Новая дата дедлайна: ${jobDay}`);
  }
  );

console.log("==================================");
