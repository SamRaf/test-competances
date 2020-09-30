export const ADD_TO_BAG = "ADD_TO_BAG";

export function addToBagAction({ id, title, description, unite }) {
  return {
    type: ADD_TO_BAG,
    payload: { id, title, description, unite },
  };
}
