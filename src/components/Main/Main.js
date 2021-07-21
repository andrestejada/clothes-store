import React from 'react'
import MainCards from './MainCards/MainCards'
import { Carousel } from './ProductsCarousel/Carousel'
import MainTitle from './Tilte/MainTitle'

const Main = () => {
    return (
        <>
            <MainCards/>
            <MainTitle/>
            <Carousel/>
        </>
    )
}

export default Main
