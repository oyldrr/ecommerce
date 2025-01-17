import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { setDrawer } from '../redux/slices/basketSlice';

// Custom CSS
import '../css/Header.css'

// React Icons
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

// MUI Components
import Badge from '@mui/material/Badge';

function Header() {

    const navigator = useNavigate();

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.basket);

    const [theme, setTheme] = useState("false");

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "#000";
            root.style.color = "#fff";
        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color = "#000"
        }
    }

    return (
        <div className='flex-space-between'>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" alt="logo" onClick={() => navigator('/')} />
                <p className='logo-text'>ouz co.</p>
            </div>
            <div className="flex-row">
                <div>
                    <input className='search-input' type="text" placeholder='Search...' />
                </div>
                <div>
                    {
                        theme ? <IoMoonOutline onClick={changeTheme} className='icon' /> : <CiLight className='icon' onClick={changeTheme} />
                    }

                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <CiShoppingBasket className='icon' style={{ marginRight: "3px" }} />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Header
