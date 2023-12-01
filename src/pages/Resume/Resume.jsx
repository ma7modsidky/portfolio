
import profileData from '../../utils/profileData';
import Grid from '@mui/material/Grid'


function Resume() {
    return (
        <div>
            <div className='section'>
                <h3 className='section_title'>Skills</h3>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} className='work'>
                        <h4>Front-End</h4>
                        {Object.keys(profileData.skills.frontend).map((key,index) => (
                            <div className="skill_box" key={index}>
                                {profileData.skills.frontend[key].icon}
                                <span>{profileData.skills.frontend[key].name}</span> 
                            </div>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={6} className='education'>
                        <h4>back-End</h4>
                        {Object.keys(profileData.skills.backend).map((key,index) => (
                            <div className="skill_box" key={index}>
                                {profileData.skills.backend[key].icon}
                                <span>{profileData.skills.backend[key].name}</span>    
                            </div>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={6} className='work'>
                        <h4>Programming Languages</h4>
                        {Object.keys(profileData.skills.programming_languages).map((key,index) => (
                            <div className="skill_box" key={index}>
                                {profileData.skills.programming_languages[key].icon}
                                <span>{profileData.skills.programming_languages[key].name}</span> 
                            </div>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Resume
