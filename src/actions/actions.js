export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_TOTAL = "UPDATE_TOTAL";

export function addItem(action) {
  console.log(action);
  return {
    type: ADD_ITEM,
    payload: action
  };
}

export function removeItem(action) {
  return {
    type: REMOVE_ITEM,
    payload: action
  };
}

export function updateTotal(input) {
  return {
    type: "UPDATE_TOTAL",
    payload: input
  };
}
