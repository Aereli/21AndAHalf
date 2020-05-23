import React, { useState, useContext } from "react"
import { DataContext } from "./DataContext"

const DrawCard = ({ newData }) => {
  const [cardObject, setCardObject] = useState([])

  const test = useContext(DataContext)
  console.log("this is context", test)

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
    <div>
      <div>
        <button onClick={drawCardHandleClick}>Draw Card</button>
      </div>

      <div className="card-object">
        {cardObject.map((card, index) => (
          <>
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
    </div>
  )
}

export default DrawCard
