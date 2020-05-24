import React from 'react'
import { Router, } from '@reach/router'
import Login from './pages/Login'
import Online from './pages/app/Online'

function App () {
  return (
    <Router>
      <Online path={'/'}/>
      <Login path={'/login'}/>
    </Router>)
}

export default App
