import React from 'react'
import style from "../intro/intro.module.css"

function intro() {
    return (
        <div className='main'>
            <div className={style.intro_box}>
                <div className={style.welcome}>
                    <h1 >WELCOME TO MOSHAZ</h1>
                    <h1>THE BEST BEAUTY SALON IN RAWALPINDI</h1>
                    <h1>ISLAMABAD</h1>
                </div>
                <div className={style.services}>
                    <div className={style.desc}>
                        <p>WE PROVIDE THE BEST BEAUTY PARLOUR SERVICES IN RAWALPINDI ISLAMABAD</p>
                    </div>
                    <div className={style.button} >
                        <button className={style.btn}>CONTACT </button>
                        <button className={style.btn}>APPOINTMENT</button>
                        <button className={style.btn}>GET DIRECTION</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default intro
