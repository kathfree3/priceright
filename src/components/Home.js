import React, { useState } from 'react'

// local imports
import CitySelector from './selectors/City'
import FormMaker from './FormMaker'

const Home = () => {
  const [city, setCity] = useState('')
  const [attributes, setAttributes] = useState([])

  return (
    <div className="homePage">     
    <div className="homepagetitle"> 
      <h1> Enter House Information Below: </h1>
    </div>
      <div className='houseInfoForm'>
        <h3> Please Select a City: </h3>
        <CitySelector setCity={setCity} setAttributes={setAttributes} />
        {city && (<FormMaker city={city} attributes={attributes} /> )}
      </div>
    </div>
  )
}
export default Home
