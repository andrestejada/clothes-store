import { ADD_SHOPPING_CARD } from "../types";

export const addProduct=(product)=>({
    type:ADD_SHOPPING_CARD,
    payload:product
})