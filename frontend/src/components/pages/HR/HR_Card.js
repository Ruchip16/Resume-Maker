import React from 'react'
import { Grid, Card, CardContent, Typography, withTheme } from '@material-ui/core'
import HRButton from './HR_button';
import { makeStyles } from '@material-ui/core';

// CSS
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
  },
  card: {
    height: "400px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    // margin: "10px",
    padding: "0px",
    flexWrap: "nowrap",
    color: "white",
  },
  mainCard: {
    width: "77%",
    margin: "45px auto",
    // backgroundColor: "#ececec",
    // padding: "0px",
    backgroundColor: "#2980b9",
    // background:
    //   "linear-gradient(rgb(0 0 0 / 3%), rgba(0, 0, 0, 0.2)), transparent",

    boxShadow: "-10px 25px 50px rgb(0 0 0 / 20%)",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "10px",
  },
  // btn: {
  //     fontSize: "15px",
  //     width: "fitContent"
  // }
}));

const HR_Card = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.mainCard}>
            <CardContent className={classes.card}>
                <div>
                    <Typography
                        variant='h5'
                    >
                        {props.content}
                    </Typography>
                </div>
                <div>
                    <HRButton buttonName={props.button1} />
                    <Typography variant='overline'>*Allowed format- .docx, .pdf, .txt</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default HR_Card