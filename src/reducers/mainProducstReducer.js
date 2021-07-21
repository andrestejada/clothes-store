import { GET_PRODUCTS,SEARCH_NOT_FOUND,SEARCH_PRODUCTS } from "../types";

const initialState={
    products:[],
    searchProducts:[],
    error:{
        msg:'',
        isError:false
    }
}


export const mainProductsReducer =(state=initialState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
                products:action.payload
            };
        case SEARCH_PRODUCTS:
            return{
                ...state,
                searchProducts:action.payload,
                error: initialState.error
            }
        case SEARCH_NOT_FOUND:
            return{
                ...state,
                searchProducts:[],
                error:{
                    msg:action.payload,
                    isError:true
                }
            }
    
        default:
            return state;
    }
}