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


app.use(notFound)
  // General purpose 'catch' all errors
app.use(errorHandler)


function notFound(req, res, next) {
  res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}






app.listen(port, () => {
  console.log('eyeyy');
})
