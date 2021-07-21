import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {ReactComponent as IconCart} from '../../../assets/icon-cart.svg'
import ShoppingCardPreview from './ShoppinCardPreview'
const Counter = styled.div`
    width: 18px;
    height: 18px;
    background-color: purple;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 68%;

    p{
        color: white;
        font-size: 13px;
    }
`

const ShoppingCard = () => {
    const [toggleCard, setToggleCard] = useState(false);
    const {shoppingCard} = useSelector(state => state.shoppingCard)
    return (
        <div className='shopping-card'     
            onClick={()=> setToggleCard(!toggleCard) }
        >
            <ShoppingCardPreview toggle={toggleCard}/>
            <Counter>
                <p>{ shoppingCard.length }</p>
            </Counter>
            <IconCart
            />
        </div>
    )
}

export default ShoppingCard
