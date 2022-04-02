import React, { useState, useEffect, useRef } from 'react'
import { usePopper } from 'react-popper'
import { FiChevronDown } from 'react-icons/fi'

const Dropdown = ({
  placement = 'bottom-start',
  children,
  title,
  width = 'w-32'
}) => {
  const [hidden, setHidden] = useState(true)

  const buttonRef = useRef(null)
  const dropdownRef = useRef(null)

  const { styles, attributes } = usePopper(
    buttonRef.current,
    dropdownRef.current,
    {
      placement: placement,
    }
  )

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hidden ||
        buttonRef.current.contains(event.target) ||
        dropdownRef.current.contains(event.target)
      ) {
        return false
      }
      setHidden(!hidden)
    }
    document.addEventListener('onmousedown', handleClickOutside)
    return () => {
      document.removeEventListener('onmousedown', handleClickOutside)
    }
  }, [hidden, dropdownRef, buttonRef])

  const handleDropdownClick = () => {
    setHidden(!hidden)
  }

  return (
    <div className="hidden lg:flex relative">

      <button
        ref={buttonRef}
        onClick={handleDropdownClick}
        className="items-center justify-center flex flex-wrap  hover:bg-gray-200 px-3 py-2 text-blue-600 font-bold  rounded-lg text-sm font-serif uppercase">
        {title}
        <FiChevronDown />
      </button>


      <div ref={dropdownRef} style={styles.popper} {...attributes.popper}>
        <div
          style={styles.offset}
          className={`dropdown ${hidden ? '' : 'open'}`}>
          <div className={`dropdown-content ${width} ${placement}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
