import React from "react"
import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"

const Container = styled.div`
  border: 1px solid grey;
  padding: 8px;
  background-color: white;
`
const Task = (props) => {
  return (
    <>
      <Draggable draggableId={props.task.id} index={props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={{
              background: snapshot.isDragging ? `#99ba83` : `white`,
              ...provided.draggableProps.style,
            }}
          >
            {props.task.content}
          </Container>
        )}
      </Draggable>
    </>
  )
}

export default Task
