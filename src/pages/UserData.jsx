import React from 'react'
import { useSelector } from 'react-redux'
import "./DataDesign.css"

const UserData = () => {
  const user = useSelector(state => state.user)

  return (
    <div className='data-form'>
      <h2>Your data</h2>
        <span><p className='data-text'>Nickname:</p> {user.userNickname}</span>
        <span><p className='data-text'>Email:</p> {user.email}</span>
        <span><p className='data-text'>Password:</p> {user.password}</span>
    </div>
  )
}

export default UserData