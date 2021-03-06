import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCard from '../itemCard'

function SingleItem() {
  const { itemId } = useParams()
  const [singleItem, setSingleItem] = useState()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/shopping/${itemId}`)

      

      .then((res) => {
        setSingleItem(res.data)
      })
      .catch((error) => console.log(error))
  }, [itemId])

  return (
    <div>
      <ItemCard item={singleItem} />
    </div>
  )
}

export default SingleItem
