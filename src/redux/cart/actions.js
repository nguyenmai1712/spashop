import { ADD_PRODUCT, CLEAR_CART, DELETE_PRODUCT, NOTIFY_CART, TOGGLE_CART, UPDATE_PRODUCT } from "./constants";

export const addProductCart = (product) => ({ type: ADD_PRODUCT, payload: product });
export const deleteProductCart = (id) => ({ type: DELETE_PRODUCT, payload: id });
export const updateProductCart = (product) => ({ type: UPDATE_PRODUCT, payload: product});
export const clearCart = () => ({ type: CLEAR_CART });
export const toggleCart = (value) => ({ type: TOGGLE_CART, payload: value });
export const notifyCart = (value) => ({ type: NOTIFY_CART, payload: value });