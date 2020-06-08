if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const express = require("express")
// const cors = require("cors")
const axios = require("axios")
const app = express()
// const path = require("path")

// app.use(cors())
// app.use(express.json())

app.get("/deck", async (req, res) => {
  let { data } = await axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .catch((err) => res.status(400).json("Error: " + err))
  res.send(data)
})

app.get("/draw", async (req, res) => {
  const deckId = await req.query.deck_id
  let { data } = await axios
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .catch((err) => res.status(400).json("Error: " + err))
  res.send(data)
})

if (["production"].includes(process.env.NODE_ENV)) {
  app.use(express.static("client/build"))

  const path = require("path")
  app.get("*", (req, res) => {
    res
      .sendFile(path.resolve("client", "build", "index.html"))
      .catch((err) => res.status(500).json("Error: " + err)) //not sure if this is needed here.
  })
}

const PORT = process.env.PORt || 5000

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`)
})
