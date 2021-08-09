import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CommonButton = () => {

  const StyledButton = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "#B5ECDE"
    },
      borderRadius: "1030.5px",
      backgroundColor: "#98DBC6",
      padding: "18px 36px",
      fontSize: "24px",
      width: "180px",
      height: "59px",
      textTransform: "none",
      fontWeight:"",
      boxShadow: "0 3px 5px 2px rgb(20 25 24 / 30%)"
    }
  })(Button);

  return (
    <div>
      <StyledButton>Submit</StyledButton>
    </div>
    )
}
export default CommonButton