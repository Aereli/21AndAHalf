import React, { useEffect, useState } from "react"
import "./App.css"
import DrawCard from "./components/DrawCard"
import Table from "./components/Table/Table"

function App() {
  const [data, setData] = useState([])
  const [newData, setNewData] = useState("")
  const [toggle, setToggle] = useState("invisible")

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
    setNewData(data.deck_id)
    setToggle("notInvisible")
  }

  return (
    <div className="App">
      <div>
        <h2>Deck ID: {newData}</h2>
      </div>
      <button onClick={newDeckHandleClick}>New Deck</button>
      <div className="table">
        <Table />
      </div>
      <div className={toggle}>
        <DrawCard newData={newData}></DrawCard>
      </div>
    </div>
  )
}

export default App
