import { combineReducers } from "redux";
import { mainProductsReducer } from "./mainProducstReducer";
import { ShoppingCardReducer } from "./ShoppingCardReducer";
import { uiReducer } from "./uiReducer";

export const rootReducers = combineReducers({
    mainProducts:mainProductsReducer,
    ui:uiReducer,
    shoppingCard:ShoppingCardReducer
})