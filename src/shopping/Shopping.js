import React, { useState, useEffect } from 'react'
import './shopping.css'
import List from './List'
import Alert from './Alert'
import axios from 'axios'

function Shopping() {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)
  const [proposedPrice, setProposedPrice] = useState()
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setALert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  useEffect(() => {
    const updatedPrice = list.reduce((total, item) => {
      return total + Number(item.proposedPrice)
    }, 0)
    setCount(updatedPrice)
  }, [list])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !proposedPrice) {
      showAlert(
        true,
        'danger',
        'Comrade, please, enter value into all the fields!'
      )
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, name, proposedPrice }
          }
          return item
        })
      )
      setName('')
      setProposedPrice([])
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'An Item edited')
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        name: name,
        proposedPrice: proposedPrice,
      }
      const updatedList = [...list, newItem]
      setList(updatedList)
      setName('')
      setProposedPrice([])

      // const updatedPrice = updatedList.reduce((total, item) => {
      //   return total + Number(item.proposedPrice)
      // }, 0)
      // setCount(updatedPrice)
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setALert({ show, type, msg })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'All Items Deleted')
    setList([])
    setCount('')
  }

  const removeOneItem = (id) => {
    showAlert(true, 'danger', 'An Item Removed')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.name)
    setProposedPrice(specificItem.proposedPrice)
  }

  const handleSubmitAll = () => {
    showAlert(true, 'success', 'Item Added Successfully!')
    const newShoppingList = {
      description: '', // not collecting description yet
      items: list,
    }
    axios
      .post('http://localhost:4000/api/shopping', newShoppingList)
      .then((response) => {
        console.log(response.data)
        const itemId = response.data._id
        // window.location = '/items/' + itemId
        window.location = `/items/${itemId}`
      })
    setName('')
    setProposedPrice([])
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
            placeholder='Input Item Name Here!'
            value={name}
            maxLength='9'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='number'
            className='groceryb'
            placeholder='Input Item Proposed Price'
            value={proposedPrice}
            onChange={(e) => setProposedPrice(e.target.value)}
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
            handleSubmitAll={handleSubmitAll}
          />
          <br></br>
          <hr></hr>

          <h4>Total Projected Budget: {count} </h4>
          <span className='clearSubmitButton'>
            <button className='clear-btn' onClick={clearList}>
              Delete all
            </button>
            <button
              type='submit'
              className='clear-btn'
              onClick={handleSubmitAll}
            >
              Submit
            </button>
          </span>
        </div>
      )}
    </section>
  )
}

export default Shopping
