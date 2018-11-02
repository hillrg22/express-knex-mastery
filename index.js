const express = require('express')
const app = express()
const port = process.env.PORT || 3100
const cors = require('cors')
const bodyParser = require('body-parser')
const knex = require('./db/connection.js')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const beerRoute = require('./Routes/beerRoute.js')
const studentsRoute = require('./Routes/studentsRoute.js')

app.use('/beers', beerRoute)
app.use('/students', studentsRoute)



app.get('/', (req,res) =>{
  res.send("Yo!")
})









app.listen(port, () => {
  console.log('eyeyy');
})
