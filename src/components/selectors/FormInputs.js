import React from 'react'
import validator from 'validator'

import Form from 'react-bootstrap/Form'

import { cityOptions, home_types } from '../../constants'

export const FormBoolean = ({ name }) => (
  <>
    <Form.Check
      required
      inline
      label='Yes'
      name={name}
      type='radio'
      key='Yes'
      value='1'
    />
    <Form.Check
      inline
      label='No'
      name={name}
      type='radio'
      key='No'
      value='0'
    />
  </>
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

export const FormHomeTypeSelector = ({ name }) => (
  <Form.Select aria-label="Default select example" name={name}>
    <option value='none'>Please select a home type</option>
    {home_types.map(({formValue, value}) => 
      <option value={value} key={value}>{formValue}</option>
    )}
  </Form.Select>
)

export const FormCitySelector = ({ name }) => (
  <Form.Select aria-label="Default select example" name={name}>
  <option value='none'>Please select a city</option>
  {cityOptions.map(({formValue, value}) => 
    <option value={value} key={value}>{formValue}</option>
  )}
</Form.Select>
)

export const FormInput = ({ name }) => (
  <Form.Control required type='text' name={name} />
)
