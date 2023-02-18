import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authActions } from '../store/auth/authSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthorized = useSelector((state) => state.auth.isAuthorized)
  return (
    <div style={{margin:"1rem"}}>
      {isAuthorized && <div>
      <LogoutButton onClick={() =>{ dispatch(authActions.logOut())
    navigate('/')
    }}>Logout</LogoutButton>
    </div>}
    </div>
  )
}

export default Header;

const LogoutButton = styled.button`
  border-radius: 23px;
  padding: 15px;
  border: 2px solid pink;
  background-color: #6de8ac;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  &:hover{
    background-color: #76ac92;
  }
`