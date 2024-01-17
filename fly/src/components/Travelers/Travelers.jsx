import React from 'react'
import paris from '../../assets/paris.jpg'
import ny from '../../assets/ny.jpg';
import dubai from '../../assets/dubai.jpg';
import london from '../../assets/london.jpg'

import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'




const travelers = [
  {
    id:1,
    destinationImage:paris,
    travelerImage:user1,
    travelerName:'Pretty Girl',
    social:'@prettygirl'
  },
  {
    id:2,
    destinationImage:ny,
    travelerImage:user2,
    travelerName:'Giga Man',
    social:'@giga'
  },
  {
    id:3,
    destinationImage:dubai,
    travelerImage:user3,
    travelerName:'Amy Ani',
    social:'@ani123'
  },
  {
    id:4,
    destinationImage:london,
    travelerImage:user4,
    travelerName:'Oleksandr Galyas',
    social:'@sasha_galyas'
  },
]

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({id,destinationImage,travelerImage,travelerName,social}) => {
              return(
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} alt="destination img" className='destinationImg'/>

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} alt="user 1" className='travelerImage'/>
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{social}</p>
                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Travelers