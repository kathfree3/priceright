import React from 'react'
import validator from 'validator'

import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

import { home_types } from '../../constants'

export const FormBoolean = ({ name }) => (
  <>
    <Form.Check
      required
      inline
      label='Yes'
      name={name}
      type='radio'
      key='Yes'
      value='true'
    />
    <Form.Check
      inline
      label='No'
      name={name}
      type='radio'
      key='No'
      value='false'
    />
  </>
)

// homeType : 0, 1, 2, 4, 5

const values = [0, 1, 2, 3, 4, 5]
console.log(home_types)
export const FormHomeType = ({ name }) => (
  <Form.Select aria-label="Default select example">
    <option value='none'>Please select a home type</option>
      {home_types.map((v, i) => 
        <option value={i}>{v}</option>
      )}
  </Form.Select>
)



export const FormInputNumber = ({ name }) => {
  const validateNumber = e => {
    const v = e.target.value
    const msg = validator.isNumeric(v) ? '' : 'Needs to be a number'
    e.target.setCustomValidity(msg)
  }

  return (
    <Form.Control
      name={name}
      required
      type='text'
      onChange={(e) => validateNumber(e)}
    />
  )
}

export const FormInput = ({ name }) => (
  <Form.Control required type='text'name={name} />
)
