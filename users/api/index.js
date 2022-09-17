const express = require('express')
const { users } = require('./users')
const app = express()
const cors = require('cors')
app.use(
  cors({
    origin: 'http://localhost:8085',
  })
)

const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/users', (req, res) => {
  return res.json(users)
})

app.post('/api/users', function (req, res) {
  const id = users.length + 1
  const { name, email, userName } = req.body
  users.push({ id, name, email, username: userName })
  return res.status(201).send(users)
})

app.get('/api/users/')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
