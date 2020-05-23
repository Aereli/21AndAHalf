import React, { useEffect, useState } from "react"
import "./App.css"

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
    setNewData(data.deck_id)
    setCardObject([])
  }

  const drawCardHandleClick = async () => {
    const result = await fetch(`/draw?deck_id=${newData}`).then((res) =>
      res
        .json()
        .then((data) => data.cards[0])
        .catch((err) => console.log(err))
    )

    const cardArray = [...cardObject, result]
    setCardObject(cardArray)
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
      <div className="card-object">
        {cardObject.map((card, index) => (
          <>
            {/* <p>{card.code}</p> */}
            <img
              onClick={(e) => console.log(e.currentTarget)}
              key={index}
              className="card-image"
              src={card.image}
              alt="card"
            ></img>
          </>
        ))}
      </div>

      <div>
        <p>Player Hand</p>
      </div>
    </div>
  )
}

export default App
