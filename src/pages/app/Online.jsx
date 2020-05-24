import React from 'react'
import { Redirect, Router, } from '@reach/router'
import { useSelector, } from 'react-redux'
import Home from './Home'

export default function Online () {
  const { token, } = useSelector(state => state.global)

  if (!token) {
    return <Redirect noThrow to={'/login'} />
  }

  return (
    <div>
      <Router>
        <Home path={'/'}/>
      </Router>
    </div>
  )
}
