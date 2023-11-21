import { Button } from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const CustomCheckbox = styled(Button)(({ theme }) => ({
    // color: theme.status.danger,
    // '&.Mui-checked': {
    //   color: theme.status.danger,
    // },
    margin: theme.spacing(1),
    fontWeight:'Bold',
  }));
  
  const theme = createTheme({
    spacing: {
      small: "5px",
      medium: "10px",
      large: "20px"
    },
  });
  
  export default function CustomStyles() {
    return (
      <ThemeProvider theme={theme}>
        <CustomCheckbox defaultChecked />
      </ThemeProvider>
    );
  }