import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Input from "./Input";
import { useNavigate } from "react-router-dom"
import { signin, signup } from '../../actions/auth'
import { useDispatch } from 'react-redux'

import { StyledPaper, StyledAvatar } from "./styles";

const initialState = {firstName:'', lastName:'',email:'',password:'',confirmPassword:''}

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup) {
      dispatch(signup(formData, navigate))
    } else {
      dispatch(signin(formData, navigate))
    }
  };
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper className="paper" elevation={3}>
        <StyledAvatar>
          <LockIcon />
        </StyledAvatar>
        <Typography className="" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Button onClick={switchMode}>
              {isSignup
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default Auth;
