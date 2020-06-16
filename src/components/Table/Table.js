import React, { useState } from "react"
import "./table.css"
// import uuid from "uuid/v4"
import Data from "./initialData"
import Column from "./column"
import { DragDropContext } from "react-beautiful-dnd"

const Table = () => {
  const [data, setData] = useState(Data)
  const [columnsFromBack, setColumnsFromBack] = useState([])

  const onDragEnd = (result) => {
    if (!result.destination) return

    const { source, destination, draggableId } = result
    let column = data.columns[source.droppableId]
    const copiedItems = Array.from(column.taskIds)
    copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, draggableId)

    const newColumn = { ...column, taskIds: copiedItems }

    const newState = {
      ...data,
      columns: { ...data.columns, [newColumn.id]: newColumn },
    }
    console.log(newState)
    setData(newState)
  }
  return (
    <>
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, columnsFromBack, setColumnsFromBack)
        }
      >
        {data.columnsOrder.map((columnId) => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    </>
  )
}

export default Table
