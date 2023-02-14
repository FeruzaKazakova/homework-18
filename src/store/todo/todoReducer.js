import * as types from './todo-actions/actionTypes'

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

export const todoReducer = (state=initialState, action) => {
    switch(action.type){
        case types.ADD_TODO:
            const newTodo = {
                id: new Date().toString(),
                task: action.payload,
                completed: false
            }
            const addedTodos = [...state.todos, newTodo]
            return{
                ...state,
                todos: addedTodos
            }
            case types.REMOVE_TODO:
                const filterTodo = state.todos.filter((t) => t.id !== action.payload.id)
                return {
                    ...state,
                    todos: filterTodo
                }
                case types.UPDATE_TODO:
                    const updatedTodos = state.todos.map((todo) => {
                        if(todo.id === action.payload.id){
                            return {...todo, task: action.payload.updatedTask}
                        }
                        return todo
                    })
                    return{
                        ...state,
                        todos: updatedTodos
                    }
                    case types.COMPLETE_TODO:
                        const toggleTodos = state.todos.map((t) => 
                        t.id === action.payload.id
                        ? {...action.payload, completed: !action.payload.completed}
                        : t
                        )
                        return{
                            ...state,
                            todos : toggleTodos
                        }
                        default:
                            return state
}
}