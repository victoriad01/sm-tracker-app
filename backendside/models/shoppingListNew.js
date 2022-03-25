const mongoose = require('mongoose')

const shoppingListTemplate = new mongoose.Schema({
  description: {
    type: String,
    required: false,
  },
  items: [
    {
      id: Number,
      name: String,
      proposedPrice: Number,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('shoppingList', shoppingListTemplate)
