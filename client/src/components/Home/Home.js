import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from "@mui/material";
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import "./style.css"

const Home = () => {
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
  )
}

export default Home