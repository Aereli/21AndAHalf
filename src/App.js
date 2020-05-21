import React, { useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const [data, setData] = useState([])
  const [newData, setNewData] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/deck").then((res) => res.json())
      setData(result)
      console.log("this is data", data)
    }
    fetchData()
  }, [newData])

  const newDeckHandleClick = () => {
    setNewData(data.deck_id)
  }

  return (
    <div className="App">
      <div>
        <h2>Deck ID: {newData}</h2>
      </div>
      <button onClick={newDeckHandleClick}>New Deck</button>
    </div>
  )
}

export default App
