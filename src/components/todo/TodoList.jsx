import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addTodo, completeTodo, removeTodo, updateTodo } from '../../store/todo/todo-actions'
import Todo from './Todo'
import TodoInput from './TodoInput'

const TodoList = () => {
  const state = useSelector((state) => ({...state.todo}))
  let dispatch = useDispatch()

  const create = (newTodo) => {
    dispatch(addTodo(newTodo))
  }

  const update = (id, updatedTask) => {
    dispatch(updateTodo({ id, updatedTask }))
  }
  
  return (
    <TodoContainer>
      <TodoInput createTodo={create} />
      <TodoLiist>
        <div>
          {state.todos &&
          state.todos.map((todo) => {
            return (
              <div key={todo.id}>
                <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                toggleTodo={() => dispatch(completeTodo(todo))}
                removeTodo={() => dispatch(removeTodo(todo))}
                updateTodo={update}
                />
              </div>
            )
          })}
        </div>
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