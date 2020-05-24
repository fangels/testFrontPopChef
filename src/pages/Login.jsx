import React, { useState, } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { GET_TOKEN, } from '../store/global/constants'

export default function Login (props) {
  const [ userName, setUserName, ] = useState('')
  const [ password, setPassword, ] = useState('')
  const { error, } = useSelector(state => state.global)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (userName && password) {
      dispatch({ type: GET_TOKEN, payload: { userName, password, }, })
    }
  }

  return (
    <div>
      {error && <text>Mauvais userName/password</text>}
      <input type='text' value={userName} onChange={e => setUserName(e.target.value)} name={'userName'} placeholder={'userName'}/>
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} name={'password'} placeholder={'password'}/>
      <input type="submit" value="Envoyer" onClick={handleSubmit} />
    </div>
  )
}
