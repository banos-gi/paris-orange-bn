import React from 'react'
import "./modal.css"

const Modal = ({children , onClose}) => {
  return (
    <div className='modal-wrapper'>
      <div className='overlay' onClick={onClose} />
      <div className='modal'>
        {children}
      </div>
    </div>
  )
}

export default Modal