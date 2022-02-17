import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import CitySelector from './selectors/CitySelector'
import FormMaker from './FormMaker'

import { Title, PageWrapper } from '../style/globalComponents'

const Home = () => {
  const [city, setCity] = useState('')
  const [attributes, setAttributes] = useState([])

  return (
    <PageWrapper>     
      <Title> Enter House Information </Title>
        <div className='houseInfoForm'>
          <h3> Please Select a City: </h3>
          <CitySelector setCity={setCity} setAttributes={setAttributes} />
          {city && (<FormMaker city={city} attributes={attributes} /> )}
        </div>
    </PageWrapper>
  )
}
export default Home




