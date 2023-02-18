import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { todoActions } from '../../store/todo/todoSlice'
import TodoInput from './TodoInput'

const TodoList = () => {
  const {todos} = useSelector((state) => state.todo)
  let dispatch = useDispatch()
  const [ isEditing, setEditing ] = useState(false);
  const [ state, setState ] = useState({id: '', task: ''});

  const editHandler = ( id, task) => {
    setEditing(true);
    setState({ ...state, id, task});
  }

  const changeHandler = (e) =>{
    setState({...state, 
    [e.target.name]: e.target.value});
  }

  const { task, id } = state;

  const edit = () =>{
   dispatch((todoActions.editTodo({task, id})));
   setEditing(false);
  }

  const deleteButton = () => {
    dispatch(todoActions.deleteAll())
  }
  
  return (
    <TodoContainer>
    <TodoInput onDeleteAll={deleteButton} />
      <TodoLiist>
      {isEditing ? 
      <div>
      <StyledEditInput type="text" name="task" value={task} onChange={changeHandler} />
      <SaveButton onClick={edit}>Save</SaveButton>
    </div>
    :
      <div>
        {todos.map(({id, task, completed}) => {
          return (
          <div key={id}>
          <Container style={{cursor:"pointer", textDecoration: completed ? "line-through" : "" }}>
      <div>
        <li onClick={() => dispatch((todoActions.toggleTodo({id, completed, task})))}>{task}</li>
      </div>
  
    <div>
      <StyledButton onClick={() => editHandler(id, task)}>Edit</StyledButton>
      <StyledDeleteButton onClick={() => dispatch(todoActions.deleteTodo({id}))}>Delete</StyledDeleteButton>
    </div>
       </Container>
    </div>
          )
        })}
      </div>
    
    }
    </TodoLiist>
    </TodoContainer>
  )
}

export default TodoList;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`
const TodoLiist = styled.ul`
  list-style: none;
  margin-top: 2rem;
  background-color: white;
  width: 25rem;
  border-radius: 10px;
`
const Container = styled.div`
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
  &:hover{
    background-color: #76ac92;
  }
`
const StyledDeleteButton = styled.button`
  margin-left: 0.5rem;
  border-radius: 16px;
  padding: 5px;
  border: 2px solid pink;
  background-color: #6de8ac;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #76ac92;
  }
`
const StyledEditInput = styled.input`
  width: 10rem;
  height: 1.6rem;
  border-radius: 6px;
  border: 2px solid pink;
  margin-left: 1rem;
`
const SaveButton = styled.button`
  margin-left: 0.5rem;
  border-radius: 16px;
  padding: 5px;
  border: 2px solid pink;
  background-color: #6de8ac;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #76ac92;
  }
`