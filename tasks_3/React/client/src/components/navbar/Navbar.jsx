import React from 'react';
import css from './navbar.module.css'

import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';



function Navbar () {
    const isAuth = useSelector(state => state.user.isAuth)
    const email = useSelector(state => state.user.email)

    return (
        <div className={css.navbar}>
        {!isAuth && <h1 className={css.homePage_h}>Welcome! Please log in or register</h1>}
        <div className={css.homePage}> 
        {!isAuth && <button className={css.homePage_btn}><NavLink to="/login">Log In</NavLink></button>}
        {!isAuth && <button className={css.homePage_btn}><NavLink to="/registration">Register</NavLink></button>}
        {isAuth && <h1 className={css.homePage_h}> Hello User {email}!</h1>}
        </div>

        </div>
    );
};

export default Navbar;
