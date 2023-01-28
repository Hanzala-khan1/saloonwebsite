import React from 'react'
import style from "../galleryimg/img.module.css"
import img1 from "../galleryimg/images/1.jpg"
import img2 from "../galleryimg/images/2.jpg"
import img3 from "../galleryimg/images/3.jpg"
import img5 from "../galleryimg/images/5.jpg"

function images() {
    return (
        <div className='main'>
            <div className={style.maindiv}>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active img">
                            <img src={img1} class="d-block w-100 h-90 imga" alt="..." />
                        </div>
                        <div class="carousel-item img">
                            <img src={img2} class="d-block w-100 h-90 imga" alt="..." />
                        </div>
                        <div class="carousel-item img">
                            <img src={img3} class="d-block w-100 h-90 imga" alt="..." />
                        </div>
                        <div class="carousel-item img">
                            <img src={img5} class="d-block w-100 h-90 imga" alt="..." />
                        </div>
                    </div>
                </div>
                <div className={style.headdiv}>
                    <h1 className={style.head_y}>IMAGES BY MOSHAZ BEAUTY SALON</h1>
                    <button className={style.btn_y}>see more</button>
                </div>

            </div>

        </div>
    )
}

export default images
