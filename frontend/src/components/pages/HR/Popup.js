import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import Popup_elem from './Popup_elem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(()=>({
    title: {
        fontSize: "25px",
        flexGrow: "1", 
        alignSelf: 'center', 
        fontWeight: "bold",
        textAlign: "center"
    },
}));

const Popup = (props) => {
    const { openPopup, setOpenPopup } = props;
    const classes = useStyles();
    return (
        <div>
            <Dialog open={openPopup}  maxWidth="sm" fullWidth>
                <DialogTitle style={{padding: '8px 24px'}}>
                    <div style={{display: 'flex'}} > 
                    <Typography className={classes.title}> SUMMARY </Typography>
                    <IconButton
                        onClick={() => {setOpenPopup(false)}}>
                        <CloseIcon/>
                    </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent style={{paddingBottom: '20px'}}>
                    {/* Content of the pop-up */}
                    <Popup_elem heading='Name' content='Bhakti Trivedi'/>
                    <Popup_elem heading='Role applied for' content='Web Developer'/>
                    <Popup_elem heading='Match Percentage' content='80%'/>
                    <Popup_elem heading='Work experience' content='DIY Intern'/>
                    <Popup_elem heading='Projects' content='Resume Buider and Analyser'/>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Popup