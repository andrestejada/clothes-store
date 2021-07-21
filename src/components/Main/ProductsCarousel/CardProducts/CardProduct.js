import React from 'react'
import './CardProduct.scss'
import {ReactComponent as IconCart} from '../../../../assets/icon-cart.svg'
import { addProduct } from '../../../../actions/shoppinCardAction'
import { useDispatch } from 'react-redux'


const CardProduct = ({nombre,precio,img}) => {
    const dispatch = useDispatch()
    return (
        <div className='card-producto-container' > 
            <img src={img} alt={nombre} />
            <div>
                <p>{nombre}</p>
                <p className='price' >${precio}</p>
                <button
                    onClick={()=> dispatch(addProduct({nombre,precio,img})) }
                > <IconCart/> Agregar al carrito</button>
            </div>
        </div>
    )
}

export default CardProduct
