import React from 'react'

// import Assets

import video from '../../assets/video.mp4'
import plane from '../../assets/plane.png'
const Home = () => {
  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay className='video' muted loop></video>
        </div>

        <img src={plane} alt="plane" className='plane'/>


      </div>
    </div>
  )
}

export default Home