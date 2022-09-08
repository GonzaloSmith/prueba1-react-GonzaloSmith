import React from 'react'

import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <p>
                Fuente:{' '}
                <a
                    href="https://mindicador.cl"
                    target="_blank"
                    rel="noreferrer">
                    Mindicador.cl
                </a>
            </p>
        </div>
    )
}

export default Footer
