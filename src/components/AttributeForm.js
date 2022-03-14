import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import { Redirect } from 'react-router'
import { useNavigate } from 'react-router-dom'

import {
  TYPES, homeAttributes,
} from '../constants'

import { FormBoolean, FormInput, FormInputNumber, FormCitySelector, FormHomeTypeSelector } from './selectors/FormInputs'
const { BOOLEAN, INPUT, NUMBER, HOME_TYPE, CITY } = TYPES


const FormMaker = () => {
  const [validated, setValidated] = useState(false)
  const history = useNavigate();

  const handleSubmit = (event) => {
    //handle validation stuff
    const form = event.currentTarget;
    const v = form.checkValidity()
    console.log(v)
    if (!v) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (v) {
      event.preventDefault();
      const sendData = []
      homeAttributes.forEach(({field}) => {
        const value = event.target.elements[field].value
        sendData.push([field, value])
      })

      console.log(sendData)
      // let req_body = {}
      // for (let i = 0; i < sendData.length; i++) {
      //   let elt = sendData[i]
      //   req_body[elt.field] = elt.value
      // }

      // history("/results");
      // axios.post('http://localhost:1234/predict', req_body)
      // .then(function (response) {
      //   let pred = response.data.prediction
      //   alert(pred)
      //   console.log(pred)
      //   response.send(pred)
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }

    setValidated(true);

  };


  const formType = (type, field) => {
    if (type === BOOLEAN) {
      return <FormBoolean name={field} />
    } else if (type === INPUT) {
      return <FormInput name={field} />
    } else if (type === NUMBER) {
      return <FormInputNumber name={field} />
    } else if (type === HOME_TYPE) {
      return <FormHomeTypeSelector name={field}/>
    } else if (type === CITY) {
      return <FormCitySelector name={field}/>
    }
  }

  const makeInputs = () => (
    homeAttributes.map(({field, formValue, type}) => (
      <Form.Group key={field} as={Row} className="justify-content-md-center mb-3">
        <Form.Label column> {formValue} </Form.Label>
        <Col>
          {formType(type, field)}
        </Col>
      </Form.Group>
    ))
  )


  return (
    <Container fluid>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {makeInputs()}
        <Button type="submit"> Get Predictions </Button>
      </Form>
      </Container>
  )
}
export default FormMaker
