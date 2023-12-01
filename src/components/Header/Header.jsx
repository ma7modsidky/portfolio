import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';

import HomeIcon from '@mui/icons-material/Home';

import { NavLink } from 'react-router-dom';
import CustomButton from '../Button/Button'
import SendIcon from '@mui/icons-material/Send';
import profileData from '../../utils/profileData';



export default function Header() {

  return (
    <div className='header'>
      <AppBar position="static">
        <Toolbar>
          <div className='header_left'>
            <NavLink to="/" exact>
              <IconButton  className='home_icon'  aria-label="menu">
              <HomeIcon />
              </IconButton>
            </NavLink>
          <Typography className='header_links'>
            <NavLink to="/skills" className='header_link'>
                Skills
            </NavLink>
            <NavLink to="/portfolio" className='header_link'>
                Portfolio
            </NavLink>
            <NavLink to="/contact" className='header_link'>
                Contact
            </NavLink>
          </Typography>
          
          </div>
          <div className='header_right'>
            {Object.keys(profileData.socials).map((key,index) => (
              <a href={profileData.socials[key].link} key={index}>
                {profileData.socials[key].icon}
              </a>
            ))}
            <CustomButton text='Hire ME' className='hireMe' icon={<SendIcon />} link='mailto:mahmoudsidky@outlook.com'/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

