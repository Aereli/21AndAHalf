import React, { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState([])
  const [newData, setNewData] = useState("")
  // const [remain, setRemain] = useState("")
  const [cardObject, setCardObject] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch("/deck")
        .then((res) => res.json())
        .then((data) => setData(data))
      // setData(result)
      console.log("this is data", data)
    }
    fetchData()
  }, [newData])

  const newDeckHandleClick = () => {
    setNewData(data.deck_id)
  }

  const drawCardHandleClick = async () => {
    const result = await fetch(`/draw?deck_id=${newData}`).then((res) =>
      res.json()
    )
    const { cards } = result

    const code = cards.map((code) => <p>{code.code}</p>)
    setCards(code)

    cardObject.push(cards)
  }

  return (
    <div className="App">
      <div>
        <h2>Deck ID: {newData}</h2>
      </div>
      <button onClick={newDeckHandleClick}>New Deck</button>
      <div>
        <button onClick={drawCardHandleClick}>Draw Card</button>
      </div>
      <div>{cards}</div>
    </div>
  )
}

export default App
