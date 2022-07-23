import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import {Navbar} from "./components/Navbar/Navbar";
import "./styles.css";

const App = () => {
  const initialPostDataState ={
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  }
  const [currentId, setCurrentId] = useState(null)
  const [postData, setPostData] = useState(initialPostDataState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <Navbar />
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
              <Posts setCurrentId={setCurrentId} setPostData={setPostData}/>
            </Grid>
            <Grid item xw={12} sm={4}>
              <Form initialPostDataState={initialPostDataState} postData={postData} currentId={currentId} setPostData={setPostData} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
