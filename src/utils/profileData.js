import React from 'react';
//social icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

//services icons
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import TimerSharpIcon from '@material-ui/icons/TimerSharp';
import MobileFriendlySharpIcon from '@material-ui/icons/MobileFriendlySharp';
import LockSharpIcon from '@material-ui/icons/LockSharp';

//skills icons
import { Icon} from '@iconify/react';
import htmlFive2 from '@iconify/icons-icomoon-free/html-five2';
import bxlCss3 from '@iconify/icons-bx/bxl-css3';
import bxlJavascript from '@iconify/icons-bx/bxl-javascript';
import bxlPython from '@iconify/icons-bx/bxl-python';
import bxlDjango from '@iconify/icons-bx/bxl-django';
import postgresqlIcon from '@iconify/icons-cib/postgresql';
import sassAlt from '@iconify/icons-cib/sass-alt';
import reactIcon from '@iconify/icons-cib/react';
import mysqlIcon from '@iconify/icons-cib/mysql';
import redisIcon from '@iconify/icons-cib/redis';
import bxlBootstrap from '@iconify/icons-bx/bxl-bootstrap';



const profileData = {
    name: 'Mahmoud Sidky',
    title: 'Full Stack Web Developer',

    birthDay: '1 January 1995',
    email: 'ma7mod_a@live.com',
    address: 'Egypt, Cairo',
    phone: '+201111504980',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com/Ma7modAlaa',
            text: 'facebook',
            icon: <FacebookIcon />
        },
        Twitter: {
            link: 'https://www.twitter.com/mahmoudsidky5',
            text: 'Twitter',
            icon: <TwitterIcon />
        },
        LinkedIn: {
            link: 'https://www.linkedin.com/in/mahmoud-sidky-646272207/',
            text: 'LinkedIn',
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: 'https://github.com/ma7modsidky',
            text: 'GitHub',
            icon: <GitHubIcon />
        },   
    },

    services: {
        WebDevelopment: {
            icon:<CodeSharpIcon/>,
            title:'Web Development',
            text:'I have been working on web design for 2 years',
        },
        FastDelivery: {
            icon:<TimerSharpIcon/>,
            title:'Fast Delivery',
            text:'I deliver your business as fast as possible.',
        },
        Responsive: {
            icon:<MobileFriendlySharpIcon/>,
            title:'Responsive Layout',
            text:'Responsive web designs that are both mobile and desktop friendly',
        },
        Secure: {
            icon:<LockSharpIcon/>,
            title:'Secure and Stable',
            text:'Secure and stable web Applications using latest Technologis on backend services',
        },
    },

    skills: {
        frontend: {
            html: {
                name:'html5',
                icon: <Icon icon={htmlFive2} />,
            },
            css:{
                name:'css3',
                icon: <Icon icon={bxlCss3} />,
            },
            js:{
                name:'Javascript',
                icon: <Icon icon={bxlJavascript} />,
            },
            sass:{
                name:'Sass',
                icon: <Icon icon={sassAlt} />,
            },
            react:{
                name:'react',
                icon: <Icon icon={reactIcon} />,
            },
            bootstap:{
                name:'bootstrap',
                icon: <Icon icon={bxlBootstrap} />,
            },

        },
        backend: {
            python:{
                name:'python',
                icon: <Icon icon={bxlPython} />,
            },
            django:{
                name:'django',
                icon: <Icon icon={bxlDjango} />,
            },
            Postgresql:{
                name:'Postgresql',
                icon: <Icon icon={postgresqlIcon} />,
            },
            mysql:{
                name:'mysql',
                icon: <Icon icon={mysqlIcon} />,
            },
            redis:{
                name:'redis',
                icon: <Icon icon={redisIcon} />,
            }
        }
    },

}

export default profileData