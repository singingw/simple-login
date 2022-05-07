const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')
require('./config/mongoose')
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(routes)
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})