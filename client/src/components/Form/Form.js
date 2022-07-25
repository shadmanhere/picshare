import React, { useState, useEffect } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import {createPost, updatePost} from '../../actions/posts'
import {StyledPaper, StyledSubmitButton} from './styles.js'

const initialPostDataState ={
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
}
const Form = ({currentId, setCurrentId}) => {
  
  const [postData, setPostData] = useState(initialPostDataState)
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if(post) setPostData(post)
  },[post])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId,{...postData, name: user?.result?.name}))  
    } else {
      dispatch(createPost({...postData, name: user?.result?.name}))
    }
    clear()
  };
  const clear = () => {
    setCurrentId(null)
    setPostData(initialPostDataState)
  };

  if(!user?.result?.name) {
    return (
      <Paper className="name">
        <Typography variant="h6" align="center">
          Please Sign In to create your own posts and like other's posts.
        </Typography>
      </Paper>
    );
  }
  
  return (
    <StyledPaper>
      <form className="root form" autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6"> Creating a Post</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className="fileInput">
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <StyledSubmitButton
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </StyledSubmitButton>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </StyledPaper>
  );
};

export default Form;
