
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const addCartWish = (product) => {
  return {
    type: "ADDITEMWish",
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type:"DELITEM",
    payload: product,
  };
};
