/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY"
};

function isWeekend(day: string): boolean {
  if (day === Week.Saturday || Week.Sunday) {
    console.log("${day} is weekend day");
    return true;
  } else {
    console.log("${day} isn't weekend day");
    return false;
  }
}
export { };