import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ComparePrice from '../ComparePrice'
import './compareitem.css'

function CompareItem() {
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
      <ComparePrice item={singleItem} />
    </div>
  )
}

export default CompareItem
