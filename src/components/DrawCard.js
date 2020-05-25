import React, { useState, useContext } from "react"
import PlayerHand from "./PlayerHand/PlayerHand"

const DrawCard = ({ newData }) => {
  const [cardObject, setCardObject] = useState([])
  const [playerObject, setPlayerObject] = useState([])

  const drawCardHandleClick = async () => {
    const result = await fetch(`/draw?deck_id=${newData}`).then((res) =>
      res
        .json()
        .then((data) => data.cards[0])
        .catch((err) => console.log(err))
    )

    // Spread operator, wrapper function (recommended)
    //https://medium.com/javascript-in-plain-english/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
    setCardObject((cardObject) => [...cardObject, result])
  }

  const send = (index, card) => {
    console.log("this is e", index, card)

    setPlayerObject((playerObject) => [...playerObject, card])
    setCardObject(cardObject.filter((c) => c !== card))
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
              onClick={() => send(index, card)}
              key={index}
              className="card-image"
              src={card.image}
              alt="card"
            ></img>
          </>
        ))}
      </div>
      <PlayerHand playerObject={playerObject} />
      {/* <div>{playerObject || playerObject.map((card) => <div>{card}</div>)}</div> */}
    </div>
  )
}

export default DrawCard
