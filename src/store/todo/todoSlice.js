import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: 1, 
            task: "complete hws",
            completed: false
        },
        {
            id: 2, 
            task: "read books",
            completed: false
        },
        {
            id: 3, 
            task: "repeat themes",
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo(state, action){
            let newTodo = {
              id: Math.random().toString(),
              task: action.payload
            }
            state.todos.push(newTodo)
          },
          deleteTodo(state, action){
            let { todos } = state;
            state.todos = todos.filter((item) => 
                item.id !==action.payload.id)
          },
          editTodo(state, action){
            let { todos } = state;
            state.todos = todos.map((item) => 
              item.id === action.payload.id ? action.payload : item)
          },
          toggleTodo(state, action){
            let { todos } = state;
            state.todos = todos.map((t) =>
            t.id === action.payload.id
            ? {...action.payload, completed: !action.payload.completed}
            : t
            )
          },
          deleteAll(state){
            state.todos = []
          }
         },
       })

export const todoActions = todoSlice.actions
