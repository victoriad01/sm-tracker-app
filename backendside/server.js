const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesURls = require('./routes/routes')
const cors = require('cors')
dotenv.config()

app.get('/', function(request, response) {
  response.send('<h3>Welcome Here Man!</h3>')
})

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log('Database Connected')
)

app.use(express.json())
app.use(cors())
app.use('/api', routesURls)
app.listen(process.env.PORT || 4000, () =>
  console.log('Server Running')
)
