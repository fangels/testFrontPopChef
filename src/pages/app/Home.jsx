import React, { useEffect, } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { Button, CircularProgress, Grid, makeStyles, Paper, Typography, } from '@material-ui/core'
import { GET_ALL_PRODUCTS, } from '../../store/products/constants'
import { Link, navigate, } from '@reach/router'

const styles = makeStyles(() => ({
  container: { paddingRight: 20, paddingLeft: 20, },
  paper: {
    flexDirection: 'row',
    display: 'flex',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  typo: { marginRight: 5, },
}))

export default function Home () {
  const { error, loading, products, } = useSelector(state => state.products)
  const dispatch = useDispatch()
  const classes = styles()

  useEffect(() => {
    if (!products.length && !loading && !error) {
      dispatch({ type: GET_ALL_PRODUCTS, })
    }
  })

  const handleAddProductClick = () => {
    navigate('product/new')
  }

  if (loading) {
    return <CircularProgress/>
  }
  return (<Grid container className={classes.constainer} alignItems={'center'} justify={'center'}>
    <h1>Home</h1>
    <Grid item xs={12}>
      <Button variant="contained" onClick={handleAddProductClick} color={'primary'}>Add Product</Button>
    </Grid>
    { products.map(product => {
      return (
        <Grid item xs={12} key={product.id}>
          <Link to={`product/${product.id}`}>
            <Paper xs={12} className={classes.paper}>
              <Typography className={classes.typo}>{product.title} -</Typography>
              <Typography>{product.nbInStock}</Typography>
            </Paper>
          </Link>
        </Grid>)
    })
    }
  </Grid>)
}
