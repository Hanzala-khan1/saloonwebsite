import React from 'react'

import About from '../aboutmuhaz/about';
import Intro from "../intro/intro"
import Customers from '../customers/Customers.js';
import Ratelist from '../ratelist/Ratelist';
import Images from '../galleryimg/images';
import Reviews from '../reviews/reviews';
import Footer from '../footer/footer.js';
import Video from '../saloon video/video.js';
import Videos from '../saloon video/videos';



function home() {
  return (
    <>
    <Video/>
    <About/>
    <Intro/>
    <Customers/>
    <Ratelist/>
    <Images/>
    <Videos/>
    <Reviews/>
    <Footer/>
    
      </>
  )
}

export default home
