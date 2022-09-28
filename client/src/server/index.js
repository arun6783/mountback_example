const express = require('express')
const path = require('path')
var cors = require('cors')

const buildFolder = path.join(__dirname, '..', '..', 'build')

var app = express()

const port = process.env.PORT || 8085

app.options(
  '*',
  cors({
    origin: '*',
  })
)


app.use(express.static(buildFolder))

app.get('/', (req, res) => {
  res.sendFile(path.join(buildFolder, 'index.html'))
})

app.listen(port, () => {
  console.log(`Mountebank demo app Server is Running in port ${port}`)
})
