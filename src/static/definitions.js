export let API = "http://192.168.55.120:3050";

/**
 * @param {string} date date to be converted to ISO format
 * @returns {string} converted date
 */
export const dateParser = (date) => {
  return new Date(date).toISOString();
};
