import React, { useState } from 'react'
import {Card} from '../Card'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../../store/auth/authSlice'

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formState, setFormState] = useState({
      email: "",
      password: ""
    })
  
    const inputChangeHandler = (name) => {
      return (event) => {
        setFormState((prevState) => ({...prevState, [name]: event.target.value}))
      }
    }
  
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(authActions.logIn(formState.email))
        if(formState.password.length < 4){
          alert("Please write at least 3 symbols")
        }else{
          navigate("/todo")
        }
    }

  return (
    <div style={{marginTop:"10rem"}}>
        <Card>
            <form onSubmit={submitHandler}>
                <StyledInputContainer>
                    <label htmlFor="email">Email</label>
                    <StyledEmailInputContainer onChange={inputChangeHandler("email")} value={formState.email} type="email" id='email' />
                </StyledInputContainer>
                <StyledInputContainer>
                    <label htmlFor="password">Password</label>
                    <StyledInput onChange={inputChangeHandler("password")} value={formState.password} type="password" id='password' />
                </StyledInputContainer>
                <ButtonContainer>
                <StyledButton>Login</StyledButton>
                </ButtonContainer>
            </form>
        </Card>
    </div>
  )
}

export default LoginPage;

const StyledInputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.9rem;
`

const StyledInput = styled.input`
    width: 300px;
    margin-right: 0.06rem;
`
const ButtonContainer = styled.div`
    width: 100%;
    text-align: center;
`
const StyledEmailInputContainer = styled.input`
    width: 300px;
    margin-left: 1.5rem;
`
const StyledButton = styled.button`
    background-color: #d291bc;
    padding: 9px 30px;
    border: none;
    border-radius: 16px;
    color: white;
    font-size: 16px;
    margin-top: 8px;
    cursor: pointer;
    &:hover{
        background-color: #bd7ca7;
    }
`