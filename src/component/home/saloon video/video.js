import React from 'react'
import style from "../saloon video/video.module.css"
import saloonVideo from "../saloon video/videos/video 1.mp4"

function video() {
    return (
        <div className='main'>
            <div className={style.maindiv}>
            <video width="100%" height="100%" controls muted className="control-video">
      <source src={saloonVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
            </div>

        </div>
    )
}

export default video
