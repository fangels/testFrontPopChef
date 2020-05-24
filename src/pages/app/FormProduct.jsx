import React, { useEffect, useState, } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { navigate, redirectTo, useParams, } from '@reach/router'
import { Button, CircularProgress, Grid, Input, makeStyles, Paper, } from '@material-ui/core'
import { CREATE_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT, } from '../../store/products/constants'

const styles = makeStyles(() => ({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  paper: {
    flexDirection: 'row',
    display: 'flex',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  typo: { marginRight: 5, },
}))

export default function FormProduct () {
  const params = useParams()

  let product
  const { error, loading, products, } = useSelector(state => state.products)

  if (params.productId) {
    product = products.find(p => p.id === parseInt(params.productId))
  }

  const dispatch = useDispatch()
  const classes = styles()

  const [ title, setTitle, ] = useState(product ? product.title : '')
  const [ description, setDescription, ] = useState(product ? product.description : '')
  const [ nbInStock, setNbInStock, ] = useState(product ? product.nbInStock : '')

  useEffect(() => {
    if (params.productId && !product && !loading && !error) {
      dispatch({
        type: GET_PRODUCT,
        payload: { productId: params.productId, },
      })
    }
  })

  useEffect(() => {
    if (product) {
      setTitle(product.title)
      setDescription(product.description)
      setNbInStock(product.nbInStock)
    }
  }, [ product, ])

  const handleSave = () => {
    if (params.productId) {
      dispatch({
        type: UPDATE_PRODUCT,
        payload: { id: params.productId, title, description, nbInStock, },
      })
    } else {
      dispatch({
        type: CREATE_PRODUCT,
        payload: { title, description, nbInStock, },
      })
    }
    navigate('/')
  }

  if (loading) {
    return <CircularProgress/>
  }
  if (error) {
    redirectTo('/')
  }
  return (<Grid container className={classes.container} alignItems={'center'} justify={'center'}>
    <h1>Product:</h1>
    <Grid item xs={12}>
      <Paper xs={12} className={classes.paper}>
        <Input className={classes.input} type='text' value={title} onChange={e => setTitle(e.target.value)} name={'title'} placeholder={'title'}/>
        <Input className={classes.input} type='text' value={description} onChange={e => setDescription(e.target.value)} name={'title'} placeholder={'description'}/>
        <Input className={classes.input} type='number' value={nbInStock} onChange={e => setNbInStock(e.target.value)} name={'nbInStock'} placeholder={'nb in stock'}/>
      </Paper>
    </Grid>
    <Grid item xs={2}>
      <Button onClick={handleSave} variant="contained" color={'primary'}>save</Button>
    </Grid>
  </Grid>)
}
