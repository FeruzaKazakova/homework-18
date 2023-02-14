import React, { useState } from 'react'
import styled from 'styled-components'

const Todo = ({toggleTodo, task, completed, id, removeTodo, updateTodo}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTask, setEditTask] = useState(task)

  const handleUpdate = (e) => {
    e.preventDefault()
    updateTodo(id, editTask)
    setIsEditing(false)
  }
  return (
    <Conetainer style={{cursor:"pointer", textDecoration: completed ? "line-through" : "" }}>
      {isEditing ? (
        <div>
          <form onSubmit={handleUpdate}>
            <StyledEditInput type="text" name="task" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
            <SaveButton>Save</SaveButton>
          </form>
        </div>
      ) : (
        <div>
          <li onClick={toggleTodo}>{task}</li>
        </div>
      )}
      <div>
        <StyledButton onClick={() => setIsEditing(true)}>Edit</StyledButton>
        <StyledDeleteButton onClick={removeTodo}>Delete</StyledDeleteButton>
      </div>
    </Conetainer>
  )
}

export default Todo;

const Conetainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`
const StyledButton = styled.button`
  margin-left: 1rem;
  border-radius: 16px;
  padding: 5px;
  border: 2px solid pink;
  background-color: #6de8ac;
  color: white;
  cursor: pointer;
`
const StyledDeleteButton = styled.button`
  margin-left: 0.5rem;
  border-radius: 16px;
  padding: 5px;
  border: 2px solid pink;
  background-color: #6de8ac;
  color: white;
  cursor: pointer;
`
const StyledEditInput = styled.input`
  width: 10rem;
  height: 1.6rem;
  border-radius: 6px;
  border: 2px solid pink;
`
const SaveButton = styled.button`
  margin-left: 0.5rem;
  border-radius: 16px;
  padding: 5px;
  border: 2px solid pink;
  background-color: #6de8ac;
  color: white;
  cursor: pointer;
`