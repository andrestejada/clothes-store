import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const ShoppingPreview = styled.div`
    position: absolute;
    top: 90%;
    right: 8%;
    width: 300px;
    background-color: white;
    z-index: 11;
    height: max-content;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow:0 3px 6px #00000029;
    display: none;
    transition: ease all 0.5s;
    padding: 10px 15px;
    `
const Img = styled.img`
    width: 60px;
    
`
const ShoppingCardPreview = ({toggle}) => {
    const {shoppingCard} = useSelector(state => state.shoppingCard)
    return (
        <ShoppingPreview style={ toggle ? {display:'block'}: null } >
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        shoppingCard.map(p=>(
                            <tr key={p.id} >
                                <td> <Img src={p.img} /> </td>
                                <td>{p.nombre}</td>
                                <td style={{fontWeight:'bold'}} >{p.precio}</td>
                            </tr>
                        ))
                    }
                                                            
                </tbody>
            </table>            
        </ShoppingPreview>
    )
}

export default ShoppingCardPreview
