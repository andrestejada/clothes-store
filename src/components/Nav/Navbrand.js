import React from 'react'
import './Navbrand.scss'
import {ReactComponent as IconUser} from '../../assets/icon-user.svg'
import {ReactComponent as IconBurguer} from '../../assets/burguer-menu.svg'
import SearchBox from './Search/SearchBox'
import ShoppingCard from './ShoppingCard/ShoppingCard'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../actions/uiActions'
const Navbrand = () => {
    const dispatch = useDispatch();
    const {IsMenuOpen} = useSelector(state => state.ui)

    const hadnleMenu=()=>{
        
        dispatch( toggleMenu( !IsMenuOpen ))
    }
    return (
        <div className='Navbrand'  >
            <p>
            <IconBurguer
                fontSize='3em'
                className='burguer-menu'
                onClick= { hadnleMenu }
            />
                ClothesStore</p>
            <SearchBox/>
            <ShoppingCard/>
            <div className='card-box' >
                <IconUser/>
                <button
                >Iniciar sesión</button>
            </div>

        </div>
    )
}

export default Navbrand
