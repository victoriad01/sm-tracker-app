const mongoose = require('mongoose')

const shoppingListTemplate = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemProposedPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('proposedShoppingList', shoppingListTemplate)
