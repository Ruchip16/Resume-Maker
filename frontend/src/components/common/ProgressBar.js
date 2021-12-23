import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';




const useStyles = makeStyles({
  root: {
        width: '60%',
        margin: '0px auto',
        paddingLeft: '50px',
        paddingTop: '10px',
    },
    progressBarColor: {
        background: '#5D8AA8'  // royal air force blue
    }
});

export default function LinearDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
          <LinearProgress variant="determinate" value={progress}
              classes={{barColorPrimary: classes.progressBarColor}}
              style={{backgroundColor: '#C4C4C4', height: '6px', borderRadius: '10px'}} />
    </div>
  );
}