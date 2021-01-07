import React, { useState } from 'react'
// import PlayerHand from './PlayerHand/PlayerHand'
import BackOfCard from '../images/backOfCard.jpg'
import Table from './Table/Table'

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
    setPlayerObject((playerObject) => [...playerObject, card])
    setCardObject(cardObject.filter((c) => c !== card))
  }

  const handleClear = () => {
    setCardObject([])
    setPlayerObject([])
  }
  return (
    <div>
      <div>
        <button onClick={handleClear}>clear</button>
        <button onClick={drawCardHandleClick}>
          <img src={BackOfCard} alt="back of card"></img>
        </button>
      </div>

      <div className="card-object">
        {cardObject.map((card, index) => {
          return (
            <>
              <img
                onClick={() => send(index, card)}
                key={index}
                className="card-image"
                src={card.image}
                alt="card"
              ></img>
            </>
          )
        })}
      </div>
      <Table playerObject={playerObject} />
      {/* <PlayerHand playerObject={playerObject} /> */}
    </div>
  )
}

export default DrawCard
