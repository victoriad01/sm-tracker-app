import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items, removeOneItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, name, proposedPrice } = item
        return (
          <article key={id} className='grocery-item'>
            <div>
              <p className='title'>{name}</p>
            </div>
            <div>
              <p className='title'>{proposedPrice}</p>
            </div>
            <div className='buttonGrouped'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeOneItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List