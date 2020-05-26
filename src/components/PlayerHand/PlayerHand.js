import React from "react"
import "./playerhand.css"

const PlayerHand = ({ playerObject }) => {
  return (
    <div className="player-hand">
      <div>
        <p>this is the player hand</p>
      </div>
      {playerObject &&
        playerObject.map((card) => (
          <>
            <div>
              <img src={card.image} alt="card"></img>
            </div>
          </>
        ))}
    </div>
  )
}

export default PlayerHand
