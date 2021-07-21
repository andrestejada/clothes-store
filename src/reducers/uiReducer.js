import { IS_OPEN_MENU } from "../types";


const initialState={
    IsMenuOpen:false
}

export const uiReducer =(state=initialState,action)=>{
    switch (action.type) {
        case IS_OPEN_MENU:
            return{
                IsMenuOpen:action.payload
            }
    
        default:
            return state;
    }
}