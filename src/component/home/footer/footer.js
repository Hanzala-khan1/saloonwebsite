import React from 'react'
import style from "../footer/foorter.module.css"

function footer() {
    return (
        <>
        <div className={style.mainfoot}>
            <div className={style.innermain}>
                <div className={style.ftbox}>
                    <h1 className={style.mainh}>FIND US</h1>
                    <h2>Address</h2>
                    <p>House#170، Street 9, Chaklala Housing Scheme 3, Rawalpindi, Punjab 46000, Pakistan</p>
                    <h2>0302-5328555 | 051-8435359</h2>
                    <p>Al-masoom Complex، Civic Center Bahria Town Civic Center Bahria Town, Rawalpindi, Islamabad, Punjab 46000, Pakistan</p>
                    <h2>0320-5083620 | 051-2724137</h2>
                    <p>Hours <br></br> Monday–Sunday: 11:00AM–8:30PM</p>
                </div>
                <div className={style.ftbox}>
                    <h1 className={style.mainh}>ABOUT MOSHAZ</h1>
                    <p>Moshaz Beauty Salon running for 16 years and providing remarkable services to their clients with full satisfaction over the past years. The beauty parlour has an excellent customer service throughout their journey.</p>
                </div>
                <div className={style.ftbox}>
                    <h1 className={style.mainh}>LOCATION</h1>
                </div>
                <div className={style.ftbox}>
                    <h1 className={style.mainh}>SOCIAL</h1>
                    <h2>Facebook</h2>
                    <h2>whatsapp</h2>
                    <h2>Instagram</h2>
                </div>

            </div>

        </div>
        <div className={style.bottom}><p>Copyright© 2020 | Hanzala khan</p></div>
        </>
    )
}

export default footer
