import React from 'react'
import './CardProduct.scss'
import {ReactComponent as IconCart} from '../../../../assets/icon-cart.svg'
import { addProduct } from '../../../../actions/shoppinCardAction'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'


const CardProduct = ({nombre,precio,img}) => {
    const handleAddProduct =()=>{
        dispatch(addProduct({nombre,precio,img}))
        Swal.fire({
            title:'Producto agregado',
            text:`${nombre} se agrego correctamente al carrito`,
            icon:'success'
        })
    }
    const dispatch = useDispatch()
    return (
        <div className='card-producto-container' > 
            <img src={img} alt={nombre} />
            <div>
                <p>{nombre}</p>
                <p className='price' >${precio}</p>
                <button
                    onClick={handleAddProduct}
                > <IconCart/> Agregar al carrito</button>
            </div>
        </div>
    )
}

export default CardProduct
