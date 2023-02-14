import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../components/login-page/LoginPage'
import TodoList from '../components/todo/TodoList'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/todo' element={<TodoList/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes;