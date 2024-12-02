import express from "express"
const app = express()

app.get('/', (req, res) => {
  res.send('Tour and travel server okay!')
})

export default app ;