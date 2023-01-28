import React from 'react'
import style from "../reviews/reviews.module.css"

function reviews() {
  return (
    <div className='main sec'>
      <div className={style.maindiv}>
        <div className={style.reviewhead}>
          <h3>Customers reviews</h3>
          <h1>SALON REVIEWS</h1>
          <h4>Check out Our Reviews On Google.</h4>

        </div>
        <div className={style.reviews_con}>
          <div className={style.reviews}>
            <div className={style.desc}>Erum and Amna did amazing make-up and hairstyling for me and my sister. Definitely recommended. The staff are polite and professional. Experienced stylists and best salon near me</div>
            <div className={style.deschead}>Aaiman Fatima</div>
            <div className={style.deschead2}>ISLAMABD</div>
          </div>
          <div className={style.reviews}>
            <div className={style.desc}>I had an amazing experience at Moshaz beauty salon in Bahria town. It’s the best place to get your hair treatment and other services. They exactly know how to give you that WOW look. Highly recommended to you all. Must visit it.</div>
            <div className={style.deschead}>Manahil Malik</div>
            <div className={style.deschead2}>RAWALPINDI</div>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default reviews
