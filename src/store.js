import { createStore } from 'redux';
import RootReducer from "./rootReducer";

const store = createStore(RootReducer);

store.subscribe(() => {
  // localStorage.setItem('todos', JSON.stringify())
  console.log(store.getState().cartReducer);
})

export default store;