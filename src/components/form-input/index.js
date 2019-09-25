import React from 'react'

import './index.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const dynLabel = (
    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
      {label}
    </label>
  )

  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? dynLabel : null}
    </div>
  )
}

export default FormInput;
