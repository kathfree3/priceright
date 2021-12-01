import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import { cityOptions } from '../../constants'

const CitySelector = ({ selectedCity }) => {
  const [formCity, selectedFormCity] = useState('Select a city')
  
  const makeOptions = () => {
    for (const key in cityOptions) {
      console.log(`${key}: ${cityOptions[key]}`);
    }
  }
  
  const update = (c) => {
    selectedCity(cityOptions[c])
    selectedFormCity(c)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle>{formCity}</Dropdown.Toggle>
      <Dropdown.Menu>
       {Object.entries(cityOptions).map(item => (
         <Dropdown.Item key={item[1]} onClick={() => update(item[0])}>
         {item[0]}
        </Dropdown.Item>
       ))} 
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default CitySelector