import React, { useState, useEffect } from 'react'

import './shopping.css'
import List from './List'
import Alert from './Alert'

import axios from 'axios'

function Shopping() {
  const [itemName, setItemName] = useState('')
  const [itemProposedPrice, setItemProposedPrice] = useState([])
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setALert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (itemName === '' || itemProposedPrice == '') {
      showAlert(
        true,
        'danger',
        'Comrade, please, enter value into all the fields!'
      )
    } else if (itemName && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: itemName, amount: itemProposedPrice }
          }
          return item
        })
      )
      setItemName('')
      setItemProposedPrice([])
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'An Item edited')
    } else {
      showAlert(true, 'success', 'Item Added Successfully!')
      const newItem = {
        id: new Date().getTime().toString(),
        title: itemName,
        amount: itemProposedPrice,
      }

      axios
        .post('http://localhost:4000/api/shopping', newItem)
        .then((response) => console.log(response.data))

      window.location = '/'

      setList([...list, newItem])
      setItemName('')
      setItemProposedPrice([])
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setALert({ show, type, msg })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'All Items Deleted')
    setList([])
  }

  const removeOneItem = (id) => {
    showAlert(true, 'danger', 'An Item Removed')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setItemName(specificItem.title)
    setItemProposedPrice(specificItem.amount)
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Items List</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='Input Item Here'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <input
            type='number'
            className='groceryb'
            placeholder='Input Item Proposed Price'
            value={itemProposedPrice}
            onChange={(e) => setItemProposedPrice(e.target.value)}
          />

          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'add +'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List
            items={list}
            removeOneItem={removeOneItem}
            editItem={editItem}
          />
          <hr></hr>
          <h4>Total Projected Budget: </h4>
          <span className='clearSubmitButton'>
            <button className='clear-btn' onClick={clearList}>
              Delete all
            </button>
            <button type='submit' className='clear-btn'>
              Submit all
            </button>
          </span>
        </div>
      )}
    </section>
  )
}

export default Shopping
