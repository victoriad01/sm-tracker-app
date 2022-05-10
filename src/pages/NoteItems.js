import React from 'react'
import { useNavigate } from 'react-router-dom'
import './noteitems.css'

function NoteItems() {
  let navigate = useNavigate()
  return (
    <>
      <div className='center-content'>
        <h2> Items you want to shop for has been saved.</h2>
        <a href='/itemsdetail'>
          <h4>View Submitted Items</h4>
        </a>

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
