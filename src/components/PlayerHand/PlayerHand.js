import React from "react"
import "./playerhand.css"

const PlayerHand = ({ playerObject }) => {
  console.log("this is from player hand", playerObject)

  return (
    <div className="player-hand">
      <div>
        <p>this is the player hand</p>
      </div>
      {playerObject &&
        playerObject.map((card) => (
          <>
            <div>
              <img src={card.image}></img>
            </div>
          </>
        ))}
    </div>
  )
}

export default PlayerHand
