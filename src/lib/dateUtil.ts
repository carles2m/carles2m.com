/**
 * Gets the current day of the week.
 * @returns Day of the week. For example "Friday".
 */
export const getWeekDay = (): string => {
  return new Date().toLocaleString("en-us", { weekday: "long" });
};

/**
 * Gets the current year.
 * @returns Year. For example 2021
 */
export const getYear = (): number => {
  return new Date().getFullYear();
};