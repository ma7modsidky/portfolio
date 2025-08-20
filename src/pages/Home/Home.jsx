import profileData from '../../utils/profileData';

function Home() {
    return (
        <div className="home">
            <div className='about_me'>
                <h3 className='home_title'>About Me</h3>
                <p>Full Stack Developer with 2+ years of expertise in modern web development. My unique background in medicine brings exceptional problem-solving skills, attention to detail, and user-centric thinking to every project. I combine technical precision with creative solutions to deliver exceptional digital experiences that drive results.</p>
                
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
