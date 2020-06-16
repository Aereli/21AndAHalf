import React from "react"
import styled from "styled-components"
import Task from "./Task"
import { Droppable } from "react-beautiful-dnd"

const Container = styled.div`
  border: 1px solid grey;
`
const Title = styled.div`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
`
const Column = (props) => {
  return (
    <>
      <Container>
        <Title>{props.column.name}</Title>
        <Droppable droppableId={props.column.id}>
          {(provided) => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
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
