import {Typography } from '@material-ui/core';
import React from 'react'
import myImage from '../../assets/images/profile.jpg'
import CustomTimeline from '../Timeline/Timeline'
import profileData from '../../utils/profileData'
import CustomButton from '../Button/Button'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import GetAppIcon from '@material-ui/icons/GetApp';

function Profile() {
    return (
        <div className='profile container_shadow'>
            <div className="profile_name">
                <Typography className='name'>{profileData.name}</Typography>
                <Typography className='title'>{profileData.title}</Typography>
            </div>

            <div className='profile_image'>
                <img src={myImage} alt='profileImage'/>
            </div>

            <div className="profile_info">
                <CustomTimeline title={''} icon={<PermIdentityIcon/>}/>
                <div className="profile_social">
                    {Object.keys(profileData.socials).map((key,index) => (
                <a href={profileData.socials[key].link} key={index} target='_blank' rel="noreferrer">
                    {profileData.socials[key].icon}
                </a>
                ))}
                </div>
            </div>

            <CustomButton text='Download CV' icon={<GetAppIcon/>}/>
        </div>
    )
}

export default Profile
