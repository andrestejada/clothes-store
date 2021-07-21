import React from 'react';
import './NavMenu.scss'
import { ReactComponent as IconClose} from '../../assets/icon-close.svg'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../actions/uiActions';
export const NavMenu = () => {
    const dispatch = useDispatch()
    const {IsMenuOpen} = useSelector(state => state.ui)
    return (
        <div className='NavMenu' style={ IsMenuOpen ? {display:'flex'} : null}>
            <IconClose 
                className='close-icon'
                onClick={ ()=>dispatch( toggleMenu(!IsMenuOpen) ) }
            />
            <ul>
                <li> <a href='/' > Hombre </a> </li>
                <li> <a href='/' > Mujer </a> </li>
                <li> <a href='/' > Junior </a> </li>
                <li> <a href='/' > Niños </a> </li>
                <li> <a href='/' > Accesorios </a> </li>
                <li> <a href='/' > Ofertas </a> </li>
            </ul>
        </div>
    )
}
