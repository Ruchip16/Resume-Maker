import React from 'react'
import { Grid,CircularProgress,LinearProgress ,Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => ({
  title: {
    fontSize: "25px",
    flexGrow: "1",
    alignSelf: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  scoreCard: {
    border: "1px solid black",
    width: "50%",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "18px",
    borderRadius: "10px",
    backgroundColor: "white",
  },
  score: {
    color: "#0f4d85",
  },
  skillsGrid: {
    border: "1px solid",
    padding: "10px",
    textAlign: "center",
    margin: "10px auto",
  },
  linearProgress: {
    width: "85%",
    margin: "5px auto",
  },
}));

const Popup = (props) => {
    const { openPopup, setOpenPopup } = props;
    const classes = useStyles();
    return (
      <div>
        <Dialog open={openPopup} maxWidth="sm" fullWidth>
          <DialogTitle style={{ padding: "8px 24px" }}>
            <div style={{ display: "flex" }}>
              <Typography className={classes.title}> Analytics </Typography>
              <IconButton
                onClick={() => {
                  setOpenPopup(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent style={{ paddingBottom: "20px" }}>
            {/* Content of the pop-up */}
            <div className={classes.scoreCard}>
              <h2>Match Score</h2>
              {/* <canvas className={classes.scoreDisplay}></canvas> */}
              <CircularProgress
                variant="determinate"
                size="9rem"
                thickness="5"
                value={60}
                className={classes.score}
              />
              <Typography variant="caption">60% out of 100%</Typography>
            </div>
            <Grid container>
              <Grid item xs={3} className={classes.skillsGrid}>
                <Typography variant="h6">Keywords Match</Typography>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  className={classes.linearProgress}
                />
                <Typography>60%</Typography>
              </Grid>
              <Grid item xs={3} className={classes.skillsGrid}>
                <Typography variant="h6">Soft skills Match</Typography>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  className={classes.linearProgress}
                />
                <Typography>20%</Typography>
              </Grid>
              <Grid item xs={3} className={classes.skillsGrid}>
                <Typography variant="h6">Hard skills Match</Typography>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  className={classes.linearProgress}
                />
                <Typography>40%</Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
}

export default Popup