import cartReducer from "redux/cart/reducer";
import sideBarMenuReducer from "redux/sidebarMenu/reducer";
import commentReducer from "redux/productComment/reducer";

const { combineReducers } = require("redux");
const RootReducer = combineReducers({
  cartReducer,
  sideBarMenuReducer,
  commentReducer,
})

export default RootReducer;