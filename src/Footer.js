import React from 'react'
const year = new Date().getFullYear()
function footer() {
  return (
    <footer>
      <div className='footer'>
        <p
          style={{
            textAlign: 'center',
            margin: 'auto',
            marginBottom: '25px',
            fontSize: '1rem',
            color: 'gray',
            fontStyle: 'italic',
          }}
        >
          Copyright VI-Media @ {year}
        </p>
      </div>
    </footer>
  )
}

export default footer
