import React from 'react'
import style from "../customers/customers.module.css"

function Customers() {
    return (
        <div className='main'>
            <div className={style.maindiv}>
                <div className={style.box_b}>
                    <h1 className={style.box_head_b}>40,548</h1>
                    <h2 className={style.box_desc_b}>Happy Customers</h2>
                </div>
                <div className={style.box}>
                    <h1 className={style.box_head}>250,000</h1>
                    <h2 className={style.box_desc}> Instagram Followers</h2>
                </div>
                <div className={style.box}>
                    <h1 className={style.box_head}>500</h1>
                    <h2 className={style.box_desc}>Youtube Subscribers</h2>
                </div>
                <div className={style.box_b}>
                    <h1 className={style.box_head_b}>102,000</h1>
                    <h2 className={style.box_desc_b}>Facebook Followers </h2>
                </div>


            </div>
        </div>
    )
}

export default Customers
