import React from 'react'
//import img
import gridImg from '../../assets/grid1.png'




const Support = () => {
  return (
    <div className='support container section'>
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plus, see what to expect along the journey!</p>
        </div>

        <div className="infoDiv flex">
          <div className="textDiv grid">

            <div className="singleInfo">
              <span className='number'>01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plus, see what to expect along the journey!</p>
            </div>

            <div className="singleInfo">
              <span className='number colorOne'>02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>Find help with booking and travel plus, see what to expect along the journey!</p>
            </div>

            <div className="singleInfo">
              <span className='number colorTwo'>03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel plus, see what to expect along the journey!</p>
            </div>
          </div>
          <div className="imgDiv">
          <img src={gridImg} alt="grid image" />
          </div>
        </div>
        
        

      </div>
    </div>
  )
}

export default Support