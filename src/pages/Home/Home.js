import React from 'react'
import profileData from '../../utils/profileData';

function Home() {
    return (
        <div className="home">
            <div className='about_me'>
                <h3 className='home_title'>About Me</h3>
                <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. </p>
                <p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may. </p>
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
