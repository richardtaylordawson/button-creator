import React, { Fragment } from "react"
import { InputGroup, FormControl } from "react-bootstrap"

export const Input = ({
  label,
  type,
  name,
  buttonValues,
  handleInputChange,
}) => {
  const value = buttonValues[name]

  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <InputGroup className="mb-3">
        {type === "color" && <InputGroup.Text>#</InputGroup.Text>}

        <FormControl
          id={name}
          name={name}
          value={value}
          onChange={handleInputChange}
          type={type}
        />

        {type === "number" && <InputGroup.Text>px</InputGroup.Text>}
      </InputGroup>
    </Fragment>
  )
}
