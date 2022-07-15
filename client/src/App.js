import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import travel from "./images/travel.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar id="appBar" position="static" color="inherit">
        <Typography id="heading" variant="h2" align="center">
          Travel
        </Typography>
        <img id="image" src={travel} alt="travel" width="60" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
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
