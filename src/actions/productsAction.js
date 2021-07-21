import { GET_PRODUCTS, SEARCH_PRODUCTS ,SEARCH_NOT_FOUND } from "../types"

export const popularProducts = ()=>{
    return async(dispatch)=>{
        try {
            const url = `https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&limit=10`
            const resp = await fetch(url)
            const data = await resp.json()
            
            const newData = data.results.map( p=> (
                {
                    nombre:p.title,
                    precio:p.price,
                    img:p.thumbnail,
                    id:p.id
                }))
            
                
            dispatch( getProducts(newData) )
        } catch (error) {
            console.log(error)
        }
    }
}

const getProducts =(products)=>({
    type:GET_PRODUCTS,
    payload:products
})


export const searchProductsAction =(termino)=> {
    return async(dispatch)=>{
        try {
            const url = `https://api.mercadolibre.com/sites/MCO/search?q=${termino}&limit=12`
            const resp = await fetch(url)
            const data = await resp.json()
            const validateCategory = data.filters[0]?.values[0].path_from_root[0].id
            if(validateCategory !== "MCO1430"){
                const msg = `El termino ${ termino.toUpperCase()} no hace parte de la categoria Moda y Accesorios`
                dispatch( seatchNotFound(msg) )
                return
              }
            const newData = data.results.map( p=> (
                {
                    nombre:p.title,
                    precio:p.price,
                    img:p.thumbnail,
                    id:p.id
                }))
            dispatch( searchProducts(newData) )
        } catch (error) {
            console.log(error)
        }
    }
};


const searchProducts =(products)=>({
    type:SEARCH_PRODUCTS,
    payload:products
})

const seatchNotFound=(msg='')=>({
    type:SEARCH_NOT_FOUND,
    payload:msg
})