
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import HomeIcon from '@material-ui/icons/Home';

import { NavLink } from 'react-router-dom';
import CustomButton from '../Button/Button'
import SendIcon from '@material-ui/icons/Send';
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
            <CustomButton text='Hire ME' className='hireMe' icon={<SendIcon />} link='mailto:ma7mod_a@live.com'/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

