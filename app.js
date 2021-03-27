const express = require('express');
const app = express()
const localPort = PORT || 3000
const { PORT } = require('./config')
const routes = require('./routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
})