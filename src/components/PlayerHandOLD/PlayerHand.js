import React, { useState, useEffect } from "react"
import "./playerhand.css"
import uuid from "uuid/v4"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const PlayerHand = ({ playerObject }) => {
  // setUpdate(playerObject)
  const [columnsFromBack, setColumnsFromBack] = useState({})

  useEffect(() => {
    setColumnsFromBack({ [uuid()]: { name: "Title", items: playerObject } })
    // console.log(columnsFromBack)
  }, [playerObject])

  const onDragEnd = (result, columnsFromBack, setColumnsFromBack) => {
    if (!result.destination) return
    const { source, destination } = result
    const column = columnsFromBack[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumnsFromBack({
      ...columnsFromBack,
      [source.droppableId]: { ...column, items: copiedItems },
    })
  }

  return (
    <div className="player-hand">
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, columnsFromBack, setColumnsFromBack)
        }
      >
        {Object.entries(columnsFromBack).map(([id, column]) => {
          return (
            <Droppable droppableId={id} key={id} direction="horizontal">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    display: `flex`,
                    position: `absolute`,
                    bottom: `0`,
                    width: `100vw`,
                    height: `300px`,
                    // background: snapshot.isDraggingOver
                    //   ? "#607d3b"
                    //   : "lightgrey",
                    backgroundColor: "#99ba83",
                    // padding: 4,
                  }}
                >
                  {column.items.map((item, index) => {
                    return (
                      <Draggable
                        key={item.code}
                        draggableId={item.code}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: `none`,
                                padding: `3px`,
                                // margin: `3px`,
                                // minHeight: "50px",
                                background: snapshot.isDragging
                                  ? `green`
                                  : `#99ba83`,
                                height: `120px`,

                                //this keeps it from causing problems..
                                ...provided.draggableProps.style,
                              }}
                            >
                              <img src={item.image} alt="card"></img>
                              {/* {item.image} */}
                            </div>
                          )
                        }}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )
        })}
      </DragDropContext>
    </div>
  )
}

export default PlayerHand
