import * as React from 'react'
import './shopping/itemCard.css'
import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import './comparePrice.css'

export default function ComparePrice({ item }) {
  const [realPrice, setRealPrice] = useState([])
  const [showDiff, setShowDiff] = useState(false)

  const clearAll = () => {
    window.location = `/shopping`
  }

  const handleBlur = (e) => {
    setShowDiff(true)
  }

  return (
    <>
      <Card
        sx={{ maxWidth: 550 }}
        style={{
          textAlign: 'left',
          margin: 'auto',
          marginBottom: '25px',
          marginTop: '60px',
        }}
      >
        <CardActionArea>
          <CardContent>
            {item && (
              <div className='item'>
                <h4>To Compare, Input Real Price.</h4>

                <ul>
                  {item.items.map((realItem) => (
                    <>
                      <div className='position'>
                        <li key={realItem._id}>
                          <label htmlFor='cbox4' className='flexItem'>
                            <span className='flex1'>-{realItem.name}:</span>
                            <span className='flex2'>
                              {realItem.proposedPrice}
                            </span>
                            <input
                              className='flex3'
                              name={realItem.name}
                              value={realItem.value}
                              onChange={(e) =>
                                setRealPrice((prevState) => ({
                                  ...prevState,
                                  [e.target.name]: e.target.value,
                                }))
                              }
                              onBlur={handleBlur}
                              placeholder='Enter Real Price Here'
                            />
                          </label>
                          {showDiff && realPrice[realItem.name] ? (
                            <h5>
                              Change in Price:
                              {Number(realItem.proposedPrice) -
                                Number(realPrice[realItem.name])}
                            </h5>
                          ) : (
                            ''
                          )}

                          <br></br>
                        </li>
                      </div>
                    </>
                  ))}
                </ul>
                <hr></hr>
              </div>
            )}
          </CardContent>
        </CardActionArea>
        <div className='clearButton'>
          <button onClick={clearAll}>Create New List</button>
        </div>
      </Card>
    </>
  )
}
