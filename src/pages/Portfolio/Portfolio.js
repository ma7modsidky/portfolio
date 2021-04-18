import React, {useState} from 'react'

import {CardContent, Grid}  from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grow } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import profileData from '../../utils/profileData';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Portfolio() {
    const [tabValue, setTabValue] = useState('all')
    const [projectDialog, setProjectDialog] = useState(false)


    return (
        <div>
            <Grid container className='section'>
                <Grid item className='section_title'>
                    <h3>Portfolio</h3>
                </Grid>
                
                {/* tabs */}
                <Grid item xs={12}>
                    <Tabs 
                    value={tabValue}
                    indicatorColor='white'
                    className='customTabs' 
                    onChange={(event,newValue) =>{setTabValue(newValue)}}>
                        <Tab 
                        label='all' 
                        value='all' 
                        className={tabValue === 'all'? 'customTabs_item active':'customTabs_item'} />

                        {[...new Set(profileData.portfolio.map((item)=> item.tag))].map(
                            (tag)=>(
                                <Tab 
                                label={tag} 
                                value={tag}  
                                className={tabValue === tag ? 'customTabs_item active':'customTabs_item'} />
                            )
                            
                        )}
                    </Tabs>
                </Grid>
                
                {/* projects */}
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {profileData.portfolio.map((project,index)=>(
                            <>
                                {tabValue === project.tag || tabValue === 'all' ? (
                                    <Grid item lg={4} md={6} sm={12} xs={12}>
                                        <Grow in timeout={1000}>
                                            <Card className='customCard' onClick={()=> setProjectDialog(project)} key={index}>
                                                <CardActionArea>
                                                    <CardMedia className='customCard_image' image={project.image} title={project.title}/>
                                                    <CardContent>
                                                        <Typography className='customCard_title'>{project.title}</Typography>
                                                        <Typography className='customCard_description' variant='body2'>{project.description}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grow>
                                    </Grid>
                                ) : null}
                            </>                            
                        ))}
                    </Grid>
                </Grid>
                <Dialog 
                open={projectDialog} 
                onClose={() => setProjectDialog(false)} 
                TransitionComponent={Transition} 
                keepMounted
                className='projectDialog'>
                    <DialogTitle onClose={() => setProjectDialog(false)} className='projectDialog_title'> {projectDialog.title} </DialogTitle>
                    <img src={projectDialog.image} alt="" className='projectDialog_image' width='100%' height='auto'/>
                    <DialogContent className='projectDialog_description'>
                        {projectDialog.description}
                    </DialogContent>
                    <DialogActions className='projectDialog_links'>
                        {projectDialog?.links?.map((link,index) => (
                            <a href={link.link} className='projectDialog_link' key={index}>{link.icon}</a>
                        ))}
                    </DialogActions>
                </Dialog>
            </Grid>
        </div>
    )
}

export default Portfolio
