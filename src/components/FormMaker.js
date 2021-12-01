import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import { cityOptions, TYPES } from '../constants'

import { FormBoolean, FormInput, FormInputNumber } from './selectors/Other'
const { BOOLEAN, INPUT, NUMBER } = TYPES


const FormMaker = ({city, attributes }) => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form)
    const v = form.checkValidity()
    console.log(v)
    console.log(form)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  const formType = type => {
    if (type === BOOLEAN) {
      return <FormBoolean />
    } else if (type === INPUT) {
      return <FormInput />
    } else if (type === NUMBER) {
      return <FormInputNumber /> 
    }
  }

  const makeInputs = () => (
    attributes.map(({field, formValue, type}) => (
      <Form.Group as={Row} className="justify-content-md-center mb-3">
        <Form.Label column sm={2}> {formValue} </Form.Label>
        <Col sm={7}>
          {formType(type)}
        </Col>
      </Form.Group>
    ))
  )

  return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {makeInputs()}
        <h3> <Button type="submit" > Get Predictions </Button> </h3>
      </Form>
  )
}
export default FormMaker
