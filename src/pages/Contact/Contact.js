import React from 'react'
import {Grid}  from '@material-ui/core'
import CustomButton from '../../components/Button/Button'
import profileData from '../../utils/profileData';

function Contact() {
    return (
        <div>
            <Grid container spacing={0} >
                <Grid item className='contact' xs={12} md={6} >
                    <h3>Contact Me</h3>
                    <form action='mailto:ma7mod_a@live.com'>
                        <input type="text" placeholder="name" className='contact_name'/>
                        <input type="email" placeholder="email" className='contact_email'/>
                        <textarea name="message" id="" placeholder="message" className='contact_message'></textarea>
                        <CustomButton text='send' className='contact_send' type='submit' value='submit'/>
                    </form>
                </Grid>
                <Grid item className='contact' xs={12} md={6}>
                    <h3>Contact information</h3>
                    <ul>
                        <li><span>Address:</span>{profileData.address}</li>
                        <li><span>Phone:</span>{profileData.phone}</li>
                        <li><span>E-mail:</span>{profileData.email}</li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
