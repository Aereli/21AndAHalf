import React, { useState } from "react"
import "./table.css"
import Data from "./InitialData"
import Column from "./Column"
import { DragDropContext } from "react-beautiful-dnd"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 200px 200px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  text-align: center;
`

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
    setData(newState)
  }
  return (
    <>
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, columnsFromBack, setColumnsFromBack)
        }
      >
        <Container>
          {data.columnsOrder.map((columnId) => {
            const column = data.columns[columnId]
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId])
            return <Column key={column.id} column={column} tasks={tasks} />
          })}
        </Container>
      </DragDropContext>
    </>
  )
}

export default Table
