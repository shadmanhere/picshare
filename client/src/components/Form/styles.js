import { Paper, Button } from "@mui/material";
import { styled } from "@mui/system"

export const StyledPaper = styled(Paper, {})({
    padding: '2%',
    ".MuiTextField-root":{
      margin: '0.2rem'
    },
    "form": {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    ".fileInput": {
      width: '97%',
      margin: '10px 0'
  }
  })

export const StyledSubmitButton = styled(Button, {})({
    marginBottom: 10
  })