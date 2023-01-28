import React from 'react'
import saloonVideo from "../saloon video/videos/video 3.mp4"
import style from "../saloon video/video.module.css"

function videos() {
    return (
        <div className='main'>
            <div className={style.maindiv}>
                <video
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    className="control-video"
                >
                    <source src={saloonVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={style.headdiv}>
                    <h1 className={style.head_y}>VIDEOS BY MOSHAZ BEAUTY SALON</h1>
                    <button className={style.btn_y}>see more</button>
                </div>
            </div>

        </div>
    )
}

export default videos
