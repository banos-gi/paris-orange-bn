import React from 'react'
import { FiEdit } from 'react-icons/fi'

const Edit = ({ onClick, right, top }) => {
  return (
    <div onClick={onClick} style={{ right: right || '0', top: top || '0' }} className='edit-wrapper'>
        <FiEdit className='icon' />
    </div>
  )
}

export default Edit