import { ADD_SHOPPING_CARD } from "../types";
import { addProduct } from "./shoppinCardAction";

describe('testing shoppingcardAction', () => {
    test('should be return a object', () => {

        const product = {
            id:'123',
            nombre:'zapatillas',
            precio:'12484',
            img:'http://imagen.com'
        }
        const action = addProduct(product)
        expect(action).toEqual({
            type:ADD_SHOPPING_CARD,
            payload:{
                id: expect.any(String),
                nombre: expect.any(String),
                precio: expect.any(String),
                img: expect.any(String),
            }
        })
    });
});