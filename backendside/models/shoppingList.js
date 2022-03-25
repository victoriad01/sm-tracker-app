const mongoose = require('mongoose')

const shoppingListTemplate = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  proposedPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('proposedShoppingList', shoppingListTemplate)
