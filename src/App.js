import React from 'react'
import { useSelector, } from 'react-redux'
import Login from './pages/Login'
import Online from './pages/app/Online'

function App () {
  const { token, } = useSelector(state => state.global)
  return (token ? <Online path={'/app'}/> : <Login path={'/login'}/>)
}

export default App
