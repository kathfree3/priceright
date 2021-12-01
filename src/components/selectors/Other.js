import React, { useState } from 'react'
import validator from 'validator'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


var groupNum = 0

const FormBooleanElement = () => (
  <>
    <Form.Check
        required
        inline
        label='Yes'
        name={`group${groupNum}`}
        type='radio'
        key='Yes'
    />
    <Form.Check
        inline
        label='No'
        name={`group${groupNum}`}
        type='radio'
        key='No'
    />
  </>
)

export const FormBoolean = () => {
  groupNum = groupNum + 1
  return (
    <FormBooleanElement />
  )
}



export const FormInputNumber = () => {
  const validateNumber = e => {
    const v = e.target.value
    const msg = validator.isNumeric(v) ? '' : 'Needs to be a number'
    e.target.setCustomValidity(msg)
  }

  return (
    <Form.Control
      required
      type='text'
      onChange={(e) => validateNumber(e)}
    />
  )
}

export const FormInput = () => (
  <Form.Control required type='text' />
)
