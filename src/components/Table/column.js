import React from "react"
import styled from "styled-components"
import Task from "./Task"
import { Droppable } from "react-beautiful-dnd"

const Container = styled.div`
  border: 1px solid grey;
  /* width: 300px; */
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
`
const Column = (props) => {
  return (
    <>
      <Container>
        <Title>{props.column.name}</Title>
        <Droppable droppableId={props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                background: snapshot.isDraggingOver ? `#354a21` : `white`,
                // ...provided.draggableProps.style,
              }}
            >
              {props.tasks.map((task, index) => {
                return <Task key={task.id} task={task} index={index} />
              })}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    </>
  )
}

export default Column
