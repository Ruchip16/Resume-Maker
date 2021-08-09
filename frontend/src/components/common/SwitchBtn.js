import { Button } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// let BtnStyle =  {
//   fontFamily : "Jost",
//   fontWeight : '500',
//   fontSize : '16px',
//   // letter-spacing: 1px,
//   display :'inline-block',
//   padding :'10px 28px 11px 28px',
//   borderRadius :'50px',
//   transition : '0.5s',
//   margin :"10px 0 0 0",
//   color : '#5bc8ac',
//   background: '#000',
//   boxShadow: "0 3px 5px 2px rgb(20 25 24 / 30%)"

// }

// #hero .btn-get-started:hover {
//   background: #0d7a5f;
//   color: black;
//   box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);
// }


const ClearButton = () => {

const StyledButton = withStyles({
  root: {
    "&:hover": {
       background: '#A3C1AD',
      color: '#000',
      boxShadow: '0 1px 2px 2px rgb(20 25 24 / 30%)'
    },
      borderRadius: "50px",
      backgroundColor: "#00416A",
      color: '#fff',
      padding: '10px 28px 11px 28px',
      fontSize: "16px",
      marginTop : '10px',
      textTransform: "none",
      fontWeight:"bold",
      boxShadow: "0 3px 5px 2px rgb(20 25 24 / 30%)"
    }
  })(Button);

  return (
    <div>
      <StyledButton>Clear</StyledButton>
    </div>
  )
}

export default ClearButton