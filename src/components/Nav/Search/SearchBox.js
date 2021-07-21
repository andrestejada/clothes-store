import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchProductsAction } from '../../../actions/productsAction'
import {ReactComponent as IconSearch} from '../../../assets/search-icon.svg'
import { useHistory } from "react-router-dom";


const SearchBox = () => {
    let history = useHistory();
    const dispatch = useDispatch()

    const initialState={
        termino:''
    };
    const [searchValue, setSearchValue] = useState(initialState)

    const {termino}= searchValue;

    const handleOnchange=(e)=>{
        setSearchValue({
                [e.target.name]:e.target.value
            });
    };

    const handleOnSubmit =(e)=>{
        e.preventDefault();
        dispatch( searchProductsAction(termino) );
        setSearchValue(initialState);
        history.push('/busqueda');
    }
    return (
        <form
            onSubmit={handleOnSubmit}
        >
        <div className='search-box' >
                <input
                    type='search'
                    placeholder='Buscar aqui producto'
                    name="termino"
                    value={termino}
                    onChange={handleOnchange}
                    required
                />
                <button
                    type='submit'
                >
                    <IconSearch/>
                </button>
            </div>
            </form>
    )
}

export default SearchBox
