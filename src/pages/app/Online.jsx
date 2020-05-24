import React from 'react'
import { Router, } from '@reach/router'
import Home from './Home'

export default function Online (props) {
  return (
    <Router>
      <Home path={'/'}/>
    </Router>
  )
}
