import Button from '@mui/material/Button';
// import { makeStyles } from '@mui/material/styles';


// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//     fontWeight:'Bold',
// }}));


// eslint-disable-next-line react/prop-types
export default function CustomButton({text, icon, click, link}) {
    // const classes = useStyles();
    return (
       <Button
        variant="contained"
        // className={classes.button}
        startIcon={icon}
        onClick={click}
        style= {{
          margin: '10px 10px',
          fontWeight: 'Bold',
          color: 'black',
        }}
      >
      {link? <a href={link} target="_blank" rel="noreferrer">{text}</a> : text }  
      
       
      </Button>
    )
}


