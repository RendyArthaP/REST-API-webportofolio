const express = require('express');
const app = express()
const port = process.env.port || 3000

const routes = require('./routes')

app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
})