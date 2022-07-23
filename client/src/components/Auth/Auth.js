import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@mui/material'
import BlockIcon from '@mui/icons-material/Block';

import './styles.css'

const Auth = () => {
  const isSignup = false
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className="paper" elevation={3}>
        <Avatar className="avatar">
          <BlockIcon />
        </Avatar>
        <Typography className="" variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Grid xs={6} md={12}>
                    <TextField name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6} />
                  </Grid>
                  <Grid xs={6} md={12}>
                    <TextField name="lasttName" label="Last Name" handleChange={handleChange} autoFocus xs={6} />
                  </Grid>
                </>
              )
            }
          </Grid>
        </form>
      </Paper>
    </Container>  
  )
}

export default Auth