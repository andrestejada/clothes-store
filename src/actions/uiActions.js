import { IS_OPEN_MENU } from "../types";

export const toggleMenu=(estado)=>({
    type:IS_OPEN_MENU,
    payload:estado
})