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
      console.log(error)
      response.json(error)
    })
})

router.get('/shopping', (request, response) => {
  shoppingListTemplateCopy
    .find()
    .then((data) => {
      response.json(data)
    })

    .catch((error) => {
      console.log(error)
      response.json(error)
    })
})

router.get('/shopping/:id', (request, response) => {
  const id = request.params.id
  shoppingListTemplateCopy
    .findById(id)
    .then((data) => {
      response.json(data)
    })

    .catch((error) => {
      console.log(error)
      response.json(error)
    })
})

router.delete('/shopping/:id', (request, response) => {
  const id = request.params.id
  shoppingListTemplateCopy
    .deleteOne({ id })
    .then((data) => {
      response.json(data)
    })

    .catch((error) => {
      console.log(error)
      response.json(error)
    })
})

module.exports = router
