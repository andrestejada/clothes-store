import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProduct from './CardProducts/CardProduct';
import { useSelector } from 'react-redux';
import { NextArrow, PreviewArrow } from './CustomArrows';
import styled from 'styled-components';

const CarrouselContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 2em;
`

export const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextArrow/> ,
        prevArrow:<PreviewArrow/>,
        responsive: [
      
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    const {products} = useSelector(state => state.mainProducts)
    return (
        <CarrouselContainer>
            <Slider  {...settings} >
                {
                    products.map( p=>(
                        <CardProduct
                            key={p.id}
                            nombre={p.nombre}
                            precio={p.precio}
                            img={p.img}
                        />
                    ))
                }
            </Slider>
        </CarrouselContainer>
       
    )
}
