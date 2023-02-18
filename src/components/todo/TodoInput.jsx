import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todoActions } from '../../store/todo/todoSlice'

const TodoInput = ({onDeleteAll}) => {
  const dispatch = useDispatch()
  const [task, setTask] = useState("")
  
  const submitHandler = (e) => {
    e.preventDefault()
    if(task !== ''){
    dispatch(todoActions.addTodo(task))
  }
    setTask("")
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <StyledInput type="text"
        placeholder='Type here something...'
        id='task'
        name='task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
         />
         <StyledButton>Add</StyledButton>
         <StyledDeleteButton onClick={onDeleteAll}>Delete All</StyledDeleteButton>
      </form>
    </div>
  )
}

export default TodoInput;

const StyledDeleteButton = styled.button`
  margin-left: 1rem;
  border-radius: 16px;
  padding: 10px;
  border: 2px solid pink;
  background-color: #f58b56;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #ab6b4a;
  }
`

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
  &:hover{
    background-color: #76ac92;
  }
`