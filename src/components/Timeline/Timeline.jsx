
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


import profileData from '../../utils/profileData';




export default function CustomTimeline({title, children, icon}) {
  return (
    <Timeline className='timeline'>
      {/* timeline header */}
      <TimelineItem className='timeline_header'>
        <TimelineSeparator>
          <TimelineDot  className='timeline_header_dot'>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timeline_header_title'>{title}</TimelineContent>
      </TimelineItem>
      
      {/* timeline remaining */}
      <CustomTimelineItem 
        title='Name:'
        text= {profileData.name}/>
      <CustomTimelineItem 
        title='Birthday:'
        text= { profileData.birthDay}/>
      <CustomTimelineItem 
        title='Email:'
        text= { profileData.email}/>
      <CustomTimelineItem 
        title='Address:'
        text= { profileData.address}/>
      <CustomTimelineItem 
        title='Phone:'
        text= { profileData.phone}/>    
    </Timeline>
  );
}

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={'timeline_separator'}>
    <TimelineDot className={'timeline_dot'}/>
    <TimelineConnector />
  </TimelineSeparator>
)

export const CustomTimelineItem = ({title, text}) => (
  <TimelineItem className='timeline_item'>
    <CustomTimelineSeparator/>
    <TimelineContent>
      <span>{title}</span>
      <span> 	&nbsp; {text}</span>
    </TimelineContent>
  </TimelineItem>
)