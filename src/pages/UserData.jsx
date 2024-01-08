import React from 'react'
import { useSelector } from 'react-redux'
import "./DataDesign.css"
import clsx from 'clsx'

const UserData = () => {
  const user = useSelector(state => state.user)
  const dataTheme = useSelector(state => state.theme.light)

  const changeDataTheme = clsx({
    "ligh": dataTheme,
    "darkness": !dataTheme
  })

  return (
    <div className={`data-form ${changeDataTheme}`}>
      <h2 className={changeDataTheme}>Your data</h2>
        <span><p className='data-text'>Nickname:</p> {user.userNickname}</span>
        <span><p className='data-text'>Email:</p> {user.email}</span>
        <span><p className='data-text'>Password:</p> {user.password}</span>
    </div>
  )
}

export default UserData