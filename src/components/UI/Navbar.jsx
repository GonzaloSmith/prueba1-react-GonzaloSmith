import React from 'react'

import style from './Navbar.module.css'
import { FaBitcoin } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className={style.nav}>
            <div className={style.horizontal}>
                <FaBitcoin />
                coincap.io
            </div>
            <div>
                <span>Gonzalo smith véliz</span>
            </div>
        </div>
    )
}

export default Navbar
