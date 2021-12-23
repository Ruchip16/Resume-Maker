import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const HRButton = (props) => {

  const {onClick} = props
  
  const StyledButton = withStyles({
    root: {
      "&:hover": {
        backgroundColor: "#86BDFD",
        color: "black",
      },
      
      borderRadius: "50px",
      backgroundColor: " #00356B",
      color: "white",
      padding: "12px 50px",
      fontSize: "18px",
      // width: "fitContent",
      // height: "59px",
      textTransform: "none",
      transition: "0.4s",
      fontWeight: "bold",
      display: "block",
      margin: "10px auto",
      // boxShadow: "0 3px 5px 2px rgb(20 25 24 / 30%)",
      // margin: "10px"
    },
  })(Button);

  return (
    <div>
      <StyledButton onClick={onClick}>{props.buttonName}</StyledButton>
    </div>
    )
}

HRButton.defaultProps = {
  btn: "Submit"
}

export default HRButton