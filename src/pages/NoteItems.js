import React from 'react'
import { useNavigate } from 'react-router-dom'
import './noteitems.css'

function NoteItems() {
  let navigate = useNavigate()
  return (
    <>
      <div className='center-content'>
        <h4>View Submitted Items</h4>

        <button
          onClick={() => {
            navigate('/')
          }}
        >
          Go to Homepage
        </button>
      </div>
    </>
  )
}

export default NoteItems
