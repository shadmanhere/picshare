import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from "@mui/material";
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import "./style.css"

const Home = () => {
    
      const [currentId, setCurrentId] = useState(null)
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(getPosts());
      }, [dispatch]);
  return (
    <Grow in>
        <Container>
          <Grid
            container
            id="mainContainer"
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xw={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xw={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home