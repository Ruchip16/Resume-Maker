import React from 'react'
import { Typography } from '@material-ui/core'
const Popup_elem = (props) => {
    return (
        <div>
            <div style={{ padding: '10px' }}>
            <Typography variant='h7' style={{fontWeight: 'bold'}}>{props.heading}: </Typography>
            <Typography variant='h7'>{props.content}</Typography>
            </div>
        </div>
    )
}

export default Popup_elem