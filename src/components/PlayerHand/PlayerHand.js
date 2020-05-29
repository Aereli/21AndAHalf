import React, { useState, useEffect } from "react"
import "./playerhand.css"
import uuid from "uuid/v4"
import { DragDropContext } from "react-beautiful-dnd"

const PlayerHand = ({ playerObject }) => {
  // setUpdate(playerObject)
  const [columnsFromBack, setColumnsFromBack] = useState({})

  useEffect(() => {
    setColumnsFromBack({ [uuid()]: { name: "Title", items: playerObject } })
    // console.log(columnsFromBack)
  }, [playerObject])

  console.log(columnsFromBack)
  return (
    <div className="player-hand">
      <DragDropContext onDragEnd={(result) => result}>
        {/* {Object.entries(columnHand)} */}
      </DragDropContext>

      <div>
        <p>this is the player hand</p>
      </div>
      {playerObject &&
        playerObject.map((card, id) => (
          <div key={id}>
            <img key={id} src={card.image} alt={id}></img>
          </div>
        ))}
    </div>
  )
}

export default PlayerHand
