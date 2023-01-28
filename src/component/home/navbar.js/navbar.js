import React from 'react';
import { NavLink } from 'react-router-dom';

import style from "../navbar.js/nav.module.css"

// import { NavHashLink as} from 'react-router-hash-link';



export default function Navbar() {


    const hamtt = () => {

        const res = document.getElementsByClassName("res")[0]
        res.classList.toggle('active')
    }
    const closenav = () => {
        const res = document.getElementsByClassName("res")[0]
        res.classList.toggle('active')

    }

    return (
        <div>


            <header>
                <nav className={style.navbar1} >
                    <div className={style.logo}>
                        <h1 className={style.mainhl}>...</h1>

                    </div>
                    <div className={style.menubar}>
                        <ul className="res">
                            <li onClick={closenav} to="#home" className={style.lin} >
                                <NavLink className={style.lin} to="/">Home</NavLink>
                            </li>
                            <li onClick={closenav} to="#home" className={style.lin} >
                                <NavLink className={style.lin} to="/Services">Services</NavLink>
                            </li>
                            <li onClick={closenav} to="#home" className={style.lin} >
                                <NavLink className={style.lin} to="/Gallery">Gallery</NavLink>
                            </li>
                            <li onClick={closenav} to="#home" className={style.lin} >
                                <NavLink className={style.lin} to="/Blogs">Blog</NavLink>
                            </li>
                            <li onClick={closenav} to="#home" className={style.lin} >
                                <NavLink className={style.lin} to="/Contact">Constct us</NavLink>
                            </li>
                            <li onClick={closenav} to="#home" className={style.lin} >
                                <NavLink className={style.lin} to="/Appointment">Appointment</NavLink>
                            </li>
                            <li onClick={closenav} to="#home" className={style.lin} >
                                <NavLink className={style.lin} to="/About">About us</NavLink>
                            </li>



                        </ul>
                    </div>
                    <div className={style.ham} onClick={hamtt}>
                        <i className={style.h}> </i>
                        <i className={style.h}> </i>
                        <i className={style.h}> </i>
                    </div>

                </nav>

            </header>

        </div>
    )
}