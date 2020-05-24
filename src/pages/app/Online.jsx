import React from 'react'
import { Redirect, } from '@reach/router'
import { useSelector, } from 'react-redux'

export default function Online (props) {
  const { token, } = useSelector(state => state.global)

  if (!token) {
    return <Redirect noThrow to={'/login'} />
  }

  return (
    <div>
      <React.Fragment>
        {props.children}
      </React.Fragment>
    </div>
  )
}
