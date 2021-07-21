import { ADD_SHOPPING_CARD } from "../types";

const initialState={
    shoppingCard:[]
}

export const ShoppingCardReducer =(state=initialState,action)=>{
    switch (action.type) {
        case ADD_SHOPPING_CARD:
            console.log(action.payload)
            return{
                ...state,
                shoppingCard:[...state.shoppingCard,action.payload]
            }
    
        default:
            return state;
    }
}