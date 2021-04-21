import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontWeight:'Bold',
}}));


export default function CustomButton({text, icon, click, link}) {
    const classes = useStyles();
    return (
       <Button
        variant="contained"
        className={classes.button}
        startIcon={icon}
        onClick={click}
      >
      {link? <a href={link} target="_blank" rel="noreferrer">{text}</a> : text }  
      
       
      </Button>
    )
}


