import React from "react"
import "./playerhand.css"

const PlayerHand = ({ playerObject }) => {
  return (
    <div className="player-hand">
      <div>
        <p>this is the player hand</p>
      </div>
      {playerObject &&
        playerObject.map((card, id) => (
          <>
            <div>
              <img src={card.image} alt={id}></img>
            </div>
          </>
        ))}
    </div>
  )
}

export default PlayerHand
