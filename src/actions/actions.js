export const addFeature = feature => {
  return {
    type: "ADD_ITEM",
    payload: feature
  };
};

export const removeFeature = feature => {
  return {
    type: "REMOVE_ITEM",
    payload: feature
  };
};

export const updateTotal = total => {
  return {
    type: "UPDATE_TOTAL",
    payload: total
  };
};
