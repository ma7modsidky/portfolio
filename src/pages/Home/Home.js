import React from 'react'
import profileData from '../../utils/profileData';

function Home() {
    return (
        <div className="home">
            <div className='about_me'>
                <h3 className='home_title'>About Me</h3>
                <p>Hi There I'm Mahmoud , I'm a full stack web developer with 2 years of experience.</p>
                <p>I worked as a doctor before, but I found my passion and love for coding and web development, so I decided to switch my career and do the most thing I'm good at </p>
                <p>I'm glad to work with you in the future and deliver you the best work you want</p>
            </div>
            <div className='my_service'>
                <h3 className='home_title'>My Services</h3>
                <div className='my_service_container'>
                    {Object.keys(profileData.services).map((key,index) => (
                    <div className="my_service_box" key={index}>
                        <div className="my_service_box_icon">
                            {profileData.services[key].icon}
                        </div>
                        <div className="my_service_box_title">
                            {profileData.services[key].title}
                        </div>
                        <div className="my_service_box_text">
                           {profileData.services[key].text}
                        </div>
                        
                        
                        
                    </div>
                    ))}
                </div>
            </div>
        </div>


    
        
    )
}

export default Home
