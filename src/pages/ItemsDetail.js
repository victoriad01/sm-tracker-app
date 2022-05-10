import React, { useEffect, useState } from 'react'
import './ItemsDetail.css'
import axios from 'axios'
import ItemCard from '../itemCard'

function ItemsDetail() {
  const [dataReceived, setDataReceived] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/shopping')
      .then((res) => {
        setDataReceived(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <div className='section-header'>
        <h3>Listed Items Detail</h3>

        <ul>
          {dataReceived.map((element, index) => (
            <>
              <ItemCard item={element} />
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ItemsDetail
