import React from 'react'
import styled from 'styled-components'
import picture from '../../assets/banner-principal-desktop.png'
const Img = styled.img`
    width: 100%;
    @media (max-width:400px){
        width: 700px;
    }
`   
const Slider = () => {
    return (
       
        <div  className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <Img src={picture} className="d-block " alt="img" />
                </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    
    )
}

export default Slider
