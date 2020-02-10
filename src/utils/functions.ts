/**
 * Function util that return is object empty or array empty.
 * @param {*} params
 * @return {boolean}
 */

export const isEmpty = (params: any): boolean => {
  if (!params) {
    return true
  }
  if (Array.isArray(params)) {
    return params.length === 0;
  }
  if (typeof params === "object") {
    return Object.entries(params).length === 0;
  }
  return true;
};
