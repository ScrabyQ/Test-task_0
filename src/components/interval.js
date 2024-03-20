function getInterval(start, end) {
  if (start > end) return getInterval(end, start);
  if (!end) end = new Date();

  const maxMonths = 12;
  const endYear = end.getFullYear();

  const february =
    (endYear % 4 === 0 && endYear % 100 !== 0) || endYear % 400 === 0
      ? 29
      : 28;
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate() + 1;

  if (months <= 0) {
    years--;
    months += maxMonths;
  }
  
  if (days < 0) {
    if (months >= 0) {
      months--;
    } else {
      years--;
      months = maxMonths;
    }
    days += daysInMonth[end.getMonth() - 1];
  }

  return JSON.stringify({ years, months, days });
}

export default getInterval;