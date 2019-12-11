export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_TOTAL = "UPDATE_TOTAL";

export function addItem(input) {
  return {
    type: "ADD_ITEM",
    payload: input
  };
}

export function removeItem(input) {
  return {
    type: "REMOVE_ITEM",
    payload: input
  };
}

export function updateTotal(input) {
  return {
    type: "UPDATE_TOTAL",
    payload: input
  };
}
