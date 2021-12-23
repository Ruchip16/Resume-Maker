import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40vw",
    },
  },
}));

export default function ContactForm() {
  const classes = useStyles();
  const [setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-textarea"
          label="Your name"
          placeholder="Full name"
          multiline
        />
        <br />
        <TextField
          id="standard-textarea"
          label="Your email id"
          placeholder="Email ID"
          multiline
        />
        <br />
        <TextField
          id="standard-textarea"
          label="Subject"
          placeholder="Subject"
          multiline
        />
        <br />
        <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue=""
        />
      </div>
      <Button variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
}
