const express = require('express')
const router = express.Router()
const shoppingListTemplateCopy = require('../models/shoppingListNew')

router.post('/shopping', (request, response) => {
  console.log(request.body)
  const itemSubmitted = new shoppingListTemplateCopy({
    
    description: request.body.description,
    items: request.body.items,
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