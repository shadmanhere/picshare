import { styled } from "@mui/system"
import { Avatar, Paper } from "@mui/material"

export const StyledPaper = styled(Paper, {})({
    padding: '2%',
    ".MuiTextField-root":{
      margin: '0.2rem'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    "form": {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '1rem'
    },
    ".fileInput": {
      width: '97%',
      margin: '10px 0'
    }
})
export const StyledAvatar = styled(Avatar, {})({
    backgroundColor:'#E60000',
})