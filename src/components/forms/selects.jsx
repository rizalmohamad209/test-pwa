import React from 'react'
import PropTypes from 'prop-types'

export const Select = ({
  inline,
  label,
  name,
  message,
  items = [
    { value: 0, label: 'Option 1' },
    { value: 1, label: 'Option 2' },
    { value: 2, label: 'Option 3' },
    { value: 3, label: 'Option 4' }
  ]
}) => (
  <div className={`form-element ${inline ? 'form-element-inline' : ''}`}>
    <div className="form-label">{label}</div>
    <select className="bg-transparent  shadow-sm outline-none border-gray-500 border text-gray-900 text-sm    p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded-full dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-select mt-1 block w-full" name={name}>
      {items.map((item, i) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
    <div className="form-hint">{message}</div>
  </div>
)
Select.propTypes = {
  inline: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string
    })
  ),
  message: PropTypes.string
}

export const InvalidSelect = ({
  inline = false,
  label = 'Label',
  name = 'name',
  message = 'This is a message',
  items = [
    { value: 0, label: 'Option 1' },
    { value: 1, label: 'Option 2' },
    { value: 2, label: 'Option 3' },
    { value: 3, label: 'Option 4' }
  ]
}) => (
  <div className={`form-element ${inline ? 'form-element-inline' : ''}`}>
    <div className="form-label">{label}</div>
    <select className="form-select form-select-invalid" name={name}>
      {items.map((item, i) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
    <div className="form-error">{message}</div>
  </div>
)
InvalidSelect.propTypes = {
  inline: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string
    })
  ),
  message: PropTypes.string
}

export const ValidSelect = ({
  inline = false,
  label = 'Label',
  name = 'name',
  message = 'This is a message',
  items = [
    { value: 0, label: 'Option 1' },
    { value: 1, label: 'Option 2' },
    { value: 2, label: 'Option 3' },
    { value: 3, label: 'Option 4' }
  ]
}) => (
  <div className={`form-element ${inline ? 'form-element-inline' : ''}`}>
    <div className="form-label">{label}</div>
    <select className="form-select form-select-valid" name={name}>
      {items.map((item, i) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
    <div className="form-success">{message}</div>
  </div>
)
ValidSelect.propTypes = {
  inline: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string
    })
  ),
  message: PropTypes.string
}

