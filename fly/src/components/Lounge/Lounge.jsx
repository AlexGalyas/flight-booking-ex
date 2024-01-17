import React from 'react'
import gridImg1 from '../../assets/grid2_1.jpg'
import gridImg2 from '../../assets/grid2_2.jpg'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
        

          <div className="grids grid">
            <div className="singleGrid">
              <span className='gridTitle'>
                  Help through the airport
              </span>
              <p>
              You can also call airlines from your phone and book a flight ticket!
              </p>

            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                  Care on the flight
              </span>
              <p>
              You can also call airlines from your phone and book a flight ticket!
              </p>
              
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Priority Boarding
              </span>
              <p>
              You can also call airlines from your phone and book a flight ticket!
              </p>
              
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                  Chauffeur-drive service
              </span>
              <p>
              You can also call airlines from your phone and book a flight ticket!
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge