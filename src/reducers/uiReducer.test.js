import { IS_OPEN_MENU } from "../types";
import { uiReducer } from "./uiReducer";

describe('testtin ui reducer', () => {
    test('should return correct object ', () => {
        const initialState={
            IsMenuOpen:false
        }

        const action ={
            type:IS_OPEN_MENU,
            payload:true
        }
        const reducer = uiReducer(initialState,action)

        expect(reducer ).toEqual({            
                IsMenuOpen:action.payload
        })
    });
});