import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

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
    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          {Object.entries(cityOptions).map(item => (
            <Form.Check
              inline
              label={item[0]}
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            ))}  
      </div>
       ))}
    </Form>
  )
}
export default CitySelector

/*<Dropdown>
      <Dropdown.Toggle>{formCity}</Dropdown.Toggle>
      <Dropdown.Menu>
       {Object.entries(cityOptions).map(item => (
         <Dropdown.Item key={item[1]} onClick={() => update(item[0])}>
         {item[0]}
        </Dropdown.Item>
       ))} 
      </Dropdown.Menu>
    </Dropdown>*/