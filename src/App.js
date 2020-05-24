import React from 'react'
import { Router, } from '@reach/router'
import Login from './pages/Login'
import Online from './pages/app/Online'
import Product from './pages/app/Product'
import Home from './pages/app/Home'
import FormProduct from './pages/app/FormProduct'

function App () {
  return (
    <Router>
      <Online path={'/'}>
        <Home path={'/'}/>
        <Product path={'product/:productId'}/>
        <FormProduct path={'product/update/:productId'} />
        <FormProduct path={'product/new'} />
      </Online>
      <Login path={'/login'}/>
    </Router>)
}

export default App
