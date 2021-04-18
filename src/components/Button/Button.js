import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontWeight:'Bold',
}}));


export default function CustomButton({text, icon}) {
    const classes = useStyles();
    return (
       <Button
        variant="contained"
        className={classes.button}
        startIcon={icon}
      >
        {text}
      </Button>
    )
}


