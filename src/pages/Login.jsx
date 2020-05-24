import React, { useEffect, useState, } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { GET_TOKEN, } from '../store/global/constants'
import { Grid, Paper, Button, Input, makeStyles, Typography, } from '@material-ui/core'
import { redirectTo, } from '@reach/router'

const styles = makeStyles(() => ({
  container: {
    minHeight: '100vh',
  },
  paper: {
    flexDirection: 'column',
    display: 'flex',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    marginBottom: 15,
  },
}))

export default function Login () {
  const [ userName, setUserName, ] = useState('')
  const [ password, setPassword, ] = useState('')
  const { error, token, } = useSelector(state => state.global)
  const dispatch = useDispatch()

  const classes = styles()

  const handleSubmit = () => {
    if (userName && password) {
      dispatch({ type: GET_TOKEN, payload: { userName, password, }, })
    }
  }

  useEffect(() => {
    if (token) { redirectTo('/') }
  }, [ token, ])

  return (
    <Grid container
      spacing={0}
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <Paper className={classes.paper}>
        {error && <Typography color={'error'}>Mauvais userName/password</Typography>}
        <Input className={classes.input} type='text' value={userName} onChange={e => setUserName(e.target.value)} name={'userName'} placeholder={'userName'}/>
        <Input className={classes.input} type='password' value={password} onChange={e => setPassword(e.target.value)} name={'password'} placeholder={'password'}/>
        <Button onClick={handleSubmit} size={'large'} color={'inherit'} fullWidth={false} disabled={(!userName || !password)}>Envoyer</Button>
      </Paper>
    </Grid>
  )
}
