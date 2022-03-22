const express = require('express')
const router = express.Router()
const shoppingListTemplateCopy = require('../models/shoppingList')

router.post('/shopping', (request, response) => {
  const itemSubmitted = new shoppingListTemplateCopy({
    itemName: request.body.itemName,
    itemProposedPrice: request.body.itemProposedPrice,
  })
  itemSubmitted
    .save()
    .then((data) => {
      response.json(data)
    })
    .catch((error) => {
      response.json(error)
    })
})

module.exports = router
