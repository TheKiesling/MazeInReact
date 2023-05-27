import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'

const Input = ({
  label,
  name,
  type,
  disabled,
  onChange,
}) => (
  <div className={styles.inputContainer}>
    <label htmlFor={name}>
      <span>
        {label || name}
      </span>
      {
        type === 'dropdown' ? (
          <select
            id={name}
            name={name}
            onChange={onChange}
          >
            <option hidden>
            &nbsp;
            </option>
            <option>rick</option>
            <option>pickle</option>
            <option>doofus</option>
          </select>
        )
          : (
            <input
              id={name}
              name={name}
              type={type}
              disabled={disabled}
              onChange={onChange}
            />
          )

      }

    </label>
  </div>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
