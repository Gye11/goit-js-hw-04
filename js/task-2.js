function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }

  let total = 0;

  for (const day of days) {
    total += day.calories;
  }

  return total / days.length;
}
