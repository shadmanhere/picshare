import {AppBar, Typography} from "@mui/material";
import { styled } from "@mui/system"


export const StyledAppBar = styled(AppBar, {})({
    borderRadius: 50,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    "img" : {
      marginLeft: 15
    }
  })
  
export const StyledTypography = styled(Typography,{})({
    color: '#551338',
    fontWeight: '400',
    textTransform: 'lowercase',
    textDecoration: 'none'
  })