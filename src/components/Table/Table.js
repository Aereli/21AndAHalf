import React, { useState } from "react"
import "./table.css"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import uuid from "uuid/v4"

const itemsFromBack = [
  { id: uuid(), content: "first card" },
  { id: uuid(), content: "second card" },
  { id: uuid(), content: "third card" },
]

const columnsFromBack = { [uuid()]: { name: "Title", items: itemsFromBack } }

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return
  const { source, destination } = result
  const column = columns[source.droppableId]
  const copiedItems = [...column.items]
  const [removed] = copiedItems.splice(source.index, 1)
  copiedItems.splice(destination.index, 0, removed)
  setColumns({
    ...columns,
    [source.droppableId]: { ...column, items: copiedItems },
  })
}

const Table = () => {
  const [columns, setColumns] = useState(columnsFromBack)
  // console.log("this object:", Object.entries(columns))
  // setColumns(...columns, columnsFromBack)

  return (
    <div className="table">
      <h1> This is the table</h1>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    width: `250px`,
                    height: `500px`,
                    background: snapshot.isDraggingOver
                      ? "lightblue"
                      : "lightgrey",
                    padding: 4,
                  }}
                >
                  {column.items.map((item, index) => {
                    // console.log(item)
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={
                                {
                                  // userSelect: `none`,
                                  // padding: `16px`,
                                  // color: `blue`,
                                }
                              }
                            >
                              {item.content}
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

export default Table
