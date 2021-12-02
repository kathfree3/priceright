import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

import { cityOptions } from '../../constants'

const CitySelector = ({ setCity, setAttributes }) => {
  
  const change = (c, a) => {
    setCity(c)
    setAttributes(a)
  }

  return (
    <Form className='cityPicker'>
        <div key={`inline-radio`} className="mb-3">
          {cityOptions.map(({city, formValue, attributes}) => (
            <Form.Check
              inline
              label={formValue}
              name="group1"
              type='radio'
              id={`inline-radio-1`}
              key={city}
              onClick={() => change(city, attributes)}
            />
          ))}  
      </div>
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