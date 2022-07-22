import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes"

//Action Creator;
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post)
    dispatch({ type: CREATE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
}

export const updatePost = (id,post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id,post)

    dispatch({ type: UPDATE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)

    dispatch({ type: DELETE, payload: id });

  } catch (err) {
    console.log(err.message)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const {data} = await api.likePost(id)
    dispatch({ type: UPDATE , payload: data})
  } catch (err) {
    console.log(err)
  }
}
