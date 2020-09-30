import { ADD_TO_BAG } from "../actions/bag_action";

const initialeState = [];

// const existingItemIndex = bag.findIndex((p) => p.id === product.id);
// if (existingItemIndex >= 0) {
//   const bagItem = bag.slice();
//   const existingItem = bagItem[existingItemIndex];
//   const updatingUniteItem = {
//     ...existingItem,
//     unite: existingItem.unite + product.unite,
//   };
//   bagItem[existingItemIndex] = updatingUniteItem;
//   setBag(bagItem);
// } else {
//   setBag([...bag, product]);
// }

export default function bagReducer(state = initialeState, action = {}) {
  switch (action.type) {
    case ADD_TO_BAG: {
      const product = action.payload;
      const bag = state;

      const existingProductIndex = findProductIndex(bag, product.id);

      const updatedCart =
        existingProductIndex >= 0
          ? updateProductUnits(bag, product)
          : [...bag, product];

      return updatedCart;
    }
  }

  return state;
}

const findProductIndex = (bag, productID) => {
  return bag.findIndex((p) => p.id === productID);
};

const updateProductUnits = (bag, product) => {
  const productIndex = findProductIndex(bag, product.id);

  const updatedCart = [...bag];
  const existingProduct = updatedCart[productIndex];

  const updatedUnitsProduct = {
    ...existingProduct,
    unite: existingProduct.unite + product.unite,
  };

  updatedCart[productIndex] = updatedUnitsProduct;

  return updatedCart;
};
