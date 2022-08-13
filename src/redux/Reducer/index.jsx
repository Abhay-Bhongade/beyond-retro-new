import { combineReducers } from "redux";
import { productsReducer } from "./Reducer";
import { wishListReducer } from "./WishListReducer";

const reducers = combineReducers({
  productsReducer,wishListReducer
});
export default reducers;