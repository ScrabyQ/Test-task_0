import { getReadableDateString } from "../util/index.js";

const holidays = [
    "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-02-22",
    "2022-02-23", "2022-03-07", "2022-03-08", "2022-05-02", "2022-05-09", "2022-06-13",
    "2022-11-03", "2022-11-04", "2023-01-02", "2023-01-03", "2023-01-04", "2023-01-05",
    "2023-01-06", "2023-02-23", "2023-02-24", "2023-03-07", "2023-03-08", "2023-05-01",
    "2023-05-08", "2023-05-09", "2023-06-12", "2023-11-03", "2023-11-06"
];

const dayOffs = [0, 1]

function isDayOff(date) {
    return dayOffs.includes(date.getDay())
}

function isHoliday(date) {
    return holidays.includes(getReadableDateString(date));
}

function getJobDay(deadline) {
    const day = new Date(deadline);

    while (isDayOff(day) || isHoliday(day)) {
        day.setDate(day.getDate() + 1);
    }

    return getReadableDateString(day);
}

export default getJobDay;