import React, { useEffect, useState } from "react"
import "./App.css"
import DrawCard from "./components/DrawCard"
import { DataContextProvider } from "./components/DataContext"

function App() {
  const [data, setData] = useState([])
  const [newData, setNewData] = useState("")
  const [cardObject, setCardObject] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch("/deck")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
    }
    fetchData()
  }, [newData])

  const newDeckHandleClick = () => {
    setCardObject([])
    setNewData(data.deck_id)
  }

  return (
    <DataContextProvider>
      <div className="App">
        <div>
          <h2>Deck ID: {newData}</h2>
        </div>
        <button onClick={newDeckHandleClick}>New Deck</button>
        <DrawCard newData={newData}></DrawCard>
      </div>
    </DataContextProvider>
  )
}

export default App
