import {forwardRef, useState} from 'react'
import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Grow from '@mui/material/Grow';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Slide from '@mui/material/Slide';
import CustomButton from '../../components/Button/Button'

import portfolioData from '../../utils/portfolioData';

const Transition = forwardRef(function Transition(props, ref) {
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

                        {[...new Set(portfolioData.map((item)=> item.tag))].map(
                            (tag, i )=>(
                                <Tab 
                                key = {i}
                                label={tag} 
                                value={tag}  
                                className={tabValue === tag ? 'customTabs_item active':'customTabs_item'} />
                            )
                            
                        )}
                    </Tabs>
                </Grid>
                
                {/* projects */}
                <Grid item xs={12}>
                    <Grid container spacing={3} style={{display:'flex',justifyContent:'start'}}>
                        {portfolioData.map((project,index)=>(
                            <> 
                                {tabValue === project.tag || tabValue === 'all' ? (
                                    <Grid item lg={4} md={6} sm={12} xs={12} key={project.title} className='no-margin'>
                                        <Grow in timeout={1000}>
                                            <Card className='customCard' onClick={()=> setProjectDialog(project)} key={index}>
                                                <CardActionArea>
                                                    <CardMedia className='customCard_image' image={project.image} title={project.title}/>
                                                    <CardContent>
                                                        <Typography className='customCard_title' variant='subtitle2'>{project.title}</Typography>
                                                        {/* <Typography className='customCard_description' variant='body2'>{project.description}</Typography> */}
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
                        <hr/>
                        <ul>
                        {projectDialog.details?.map((item,index) => (
                            <li key={index} style={{textAlign: 'left'}}>{item}</li>
                        ))}
                        </ul>
                        
                    </DialogContent>
                    
                    
                    <DialogActions className='projectDialog_links'>
                        {projectDialog?.links?.map((link,index) => (
                            // <a href={link.link} className='projectDialog_link' key={index}>{link.icon}</a>
                            <CustomButton text={link.name} 
                            key={index} 
                            icon={link.icon}
                            link={link.link}/>
                        ))}
                    </DialogActions>
                </Dialog>
            </Grid>
        </div>
    )
}

export default Portfolio
