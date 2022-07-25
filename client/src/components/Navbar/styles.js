import {AppBar, Typography, Toolbar} from "@mui/material";
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

export const StyledToolbar = styled(Toolbar,{})({
  '.profile' : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  '.profile > *' : {
    margin: '0 6px'
  }
})