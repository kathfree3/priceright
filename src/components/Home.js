import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import CitySelector from './selectors/City'

const Home = () => {
  const [city, selectedCity] = useState('')

  /*
  borough
  neighborhood
  address
  zipcode
  year built 
  square feet
  */

  return (
    <div className="homePage"> 
      <h1> Enter House Information Below: </h1>
      <form>
        <CitySelector selectedCity={selectedCity}/>
      </form>

      <div className='houseInfoForm'>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}> Borough </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
         </Form.Group>
         <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm={2}> Neighborhood </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm={2}> Address </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm={2}> Zipcode </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm={2}> Year Built </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm={2}> Square Feet </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>

        
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="button">Get Prediction</Button>
    </Col>
  </Form.Group>
</Form>
</div>
    </div>
  )
}
export default Home
