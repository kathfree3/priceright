import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
const axios = require('axios').default;

import { cityOptions, TYPES } from '../constants'

import { FormBoolean, FormInput, FormInputNumber } from './selectors/Other'
const { BOOLEAN, INPUT, NUMBER } = TYPES


const FormMaker = ({city, attributes }) => {
  const [validated, setValidated] = useState(false)

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
      attributes.forEach(({field}) => {
        const value = event.target.elements[field].value
        sendData.push({field, value})
      })
      let req_body = {}
      for (let i = 0; i < sendData.length; i++) {
        let elt = sendData[i]
        req_body[elt.field] = elt.value
      }

      axios.post('http://localhost:5000/predict', req_body, {headers: {"Access-Control-Allow-Origin": "*"}})
      .then(function (response) {
        let pred = response.data.prediction
        alert(pred)
        console.log(pred)
      })
      .catch(function (error) {
        console.log(error);
      });
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
    }
  }

  const makeInputs = () => (
    attributes.map(({field, formValue, type}) => (
      <Form.Group as={Row} className="justify-content-md-center mb-3">
        <Form.Label column sm={2}> {formValue} </Form.Label>
        <Col sm={7}>
        <FormInputNumber name={field} />
        </Col>
      </Form.Group>
    ))
  )


  return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {makeInputs()}
        <Button type="submit"> Get Predictions </Button>
      </Form>
  )
}
export default FormMaker
