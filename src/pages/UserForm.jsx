import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAction } from '../store/userActions'
import './UserForm.css'

const UserForm = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')


  const dispatch = useDispatch()

  const noReboot = (e) => {
    e.preventDefault()
    dispatch(userAction({userNickname: userName, email: userEmail, password: userPassword}))
    // очищение полей вода перед отправкой в store, чтобы это не вызывало
    // никаких ошибок и не перенагружало сайт
    setUserName('')
    setUserEmail('')
    setUserPassword('')
  }

  return (
    <div>
        <div className='background'>
          <h1>Login to Your Account</h1>
          <p className='info'>Vorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
          <form action="" className='user-form' onSubmit={noReboot}>
            <input 
              type="text" placeholder='nickname' 
              value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <input 
              type="email" placeholder='gmail' 
              value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            <input 
              type="text" placeholder='password' 
              value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
            <button>save</button>
            <p className='under-info'>Don’t have an account yet? <p className='registerNow'>Register now!</p></p>
        </form>
        {/* <div>
            <span>Nickname {user.userNickname}</span>
            <span>Email {user.email}</span>
            <span>Password {user.password}</span>
        </div> */}
    </div>
  )
}

export default UserForm