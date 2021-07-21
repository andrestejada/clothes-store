import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CardProduct from '../Main/ProductsCarousel/CardProducts/CardProduct'
const SearchBox= styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 2em;
    margin: 1em;
    
    @media (max-width:920px){
        grid-template-columns: repeat(3,1fr);
    }
    @media (max-width:780px){
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width:390px){
        grid-template-columns: repeat(1,1fr);
    }
`;

const H2 = styled.h2`
    padding: 1em 2em;
`

const SearchContainer = () => {
    const {searchProducts,error} = useSelector(state => state.mainProducts)
    return (
        <>
        <H2>{error.msg}</H2>
        <SearchBox>
            {
                searchProducts.map( p=>(
                    <CardProduct
                        key={p.id}
                        nombre={p.nombre}
                        img={p.img}
                        precio={p.precio}
                    />
                ))
            }
        </SearchBox>
        </>
    )
}

export default SearchContainer
