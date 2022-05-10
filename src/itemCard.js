import * as React from 'react'
import './ItemCard.css'
import axios from 'axios'
import './shopping/itemCard.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function ItemCard({ item }) {
  let navigate = useNavigate()
  const { itemId } = useParams()
  const clearAll = (itemId) => {
    axios
      .delete(`http://localhost:4000/api/shopping/${itemId}`)
      .then((res) => {})
      .catch((error) => console.log(error))
    window.location = `/shopping`
  }

  return (
    <>
      <Card className='style' sx={{ maxWidth: 550 }}>
        <CardActionArea>
          <CardContent>
            {item && (
              <div className='items'>
                <h4>You entered the item(s) below.</h4>
                <p className='purchased'>
                  Check the box to mark as <span>purchased</span>.
                </p>
                <ul>
                  {item.items.map((realItem) => (
                    <>
                      <li key={realItem._id}>
                        <input
                          type='checkbox'
                          className='cbox4'
                          value='fourth_checkbox'
                        />{' '}
                        <label htmlFor='cbox4'>
                          {' '}
                          <span>-{realItem.name}:</span>
                          <span>{realItem.proposedPrice}</span>
                        </label>
                      </li>
                    </>
                  ))}
                </ul>
                <hr></hr>
              </div>
            )}
          </CardContent>
        </CardActionArea>
        <div className='buttonGrouped'>
          <button className='clearAll' onClick={clearAll}>
            Clear All
          </button>
          <button
            className='comparePrice'
            onClick={() => {
              navigate(`/compare/${itemId}`)
            }}
          >
            Compare Price
          </button>
        </div>
      </Card>
    </>
  )
}
