import React, { useEffect, } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { Link, redirectTo, useParams, } from '@reach/router'
import { Button, CircularProgress, Grid, makeStyles, Paper, Typography, } from '@material-ui/core'
import { DELETE_PRODUCT, GET_PRODUCT, } from '../../store/products/constants'

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

export default function Product () {
  const params = useParams()
  const { error, loading, products, } = useSelector(state => state.products)
  const product = products.find(p => p.id === parseInt(params.productId))
  const dispatch = useDispatch()
  const classes = styles()

  useEffect(() => {
    if (!product && !loading && !error) {
      dispatch({
        type: GET_PRODUCT,
        payload: { productId: params.productId, },
      })
    }
  })

  const handleDelete = () => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: { id: params.productId, },
    })
    redirectTo('/')
  }

  if (loading) {
    return <CircularProgress/>
  }
  if (error) {
    redirectTo('/')
  }
  return (<Grid container className={classes.container} alignItems={'center'} justify={'center'}>
    <h1>Product:</h1>
    {product
      ? (<Grid item xs={12}>
        <Paper xs={12} className={classes.paper}>
          <Typography className={classes.typo}>{product.title} -</Typography>
          <Typography className={classes.typo}>{product.description} -</Typography>
          <Typography>{product.nbInStock}</Typography>
        </Paper>
      </Grid>) : null
    }
    <Grid item xs={2}>
      <Button variant="contained" color={'primary'}><Link to={`../update/${params.productId}`}>Update</Link></Button>
    </Grid>
    <Grid item xs={2}>
      <Button onClick={handleDelete} variant="contained" color={'secondary'}>Delete</Button>
    </Grid>
  </Grid>)
}
