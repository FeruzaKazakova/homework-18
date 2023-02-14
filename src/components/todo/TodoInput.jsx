import React, { useState } from 'react'
import styled from 'styled-components'

const TodoInput = ({createTodo}) => {
  const [task, setTask] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    createTodo(task)
    setTask("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledInput type="text"
        placeholder='Type here something...'
        id='task'
        name='task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
         />
         <StyledButton>Add</StyledButton>
      </form>
    </div>
  )
}

export default TodoInput;

const StyledInput = styled.input`
  width: 24rem;
  height: 2.5rem;
  border-radius: 10px;
  border: 2px solid pink;
  margin-left: 2.5rem;
`
const StyledButton = styled.button`
  margin-left: 1rem;
  border-radius: 16px;
  padding: 10px;
  border: 2px solid pink;
  background-color: #6de8ac;
  color: white;
  cursor: pointer;
`