import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import travel from './images/travel.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
  return (
    <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">Travel</Typography>
            <img src={travel} alt="travel" height="60" />
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                    <Grid item xw={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xw={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
  );
};

export default App;
