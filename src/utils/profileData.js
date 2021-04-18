import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import TimerSharpIcon from '@material-ui/icons/TimerSharp';
import MobileFriendlySharpIcon from '@material-ui/icons/MobileFriendlySharp';
import LockSharpIcon from '@material-ui/icons/LockSharp';


import { Icon} from '@iconify/react';
import htmlFive2 from '@iconify/icons-icomoon-free/html-five2';
import bxlCss3 from '@iconify/icons-bx/bxl-css3';
import bxlJavascript from '@iconify/icons-bx/bxl-javascript';
import bxlPython from '@iconify/icons-bx/bxl-python';
import bxlDjango from '@iconify/icons-bx/bxl-django';
import postgresqlIcon from '@iconify/icons-cib/postgresql';

import p1 from '../assets/images/projects/placeholder.png';

const profileData = {
    name: 'Mahmoud Sidky',
    title: 'Full Stack Web Developer',

    birthDay: '1 January 1995',
    email: 'ma7mod_a@live.com',
    address: 'Egypt, Cairo',
    phone: '+201111504980',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com',
            text: 'facebook',
            icon: <FacebookIcon />
        },
        Twitter: {
            link: 'https://www.twitter.com',
            text: 'Twitter',
            icon: <TwitterIcon />
        },
        LinkedIn: {
            link: 'https://www.linkedin.com',
            text: 'LinkedIn',
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: 'https://www.github.com',
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
            }
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
            }
        }
    },

    portfolio: [
        {
            tag:'react',
            title:'project1',
            image: p1,
            description:'this is project 1 description',
            links:[
                {link:'https://www.google.com.eg/', icon:<FacebookIcon />},
                {link:'https://www.google.com.eg/', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'html&css',
            title:'project2',
            image: p1,
            description:'this is project 1 descriptionthis is project 1 descriptionthis is project 1 descriptionthis is project 1 descriptionthis is project 1 descriptionthis is project 1 descriptionthis is project 1 description',
            links:[
                {link:'https://www.google.com.eg/', icon:<FacebookIcon />},
                {link:'https://www.google.com.eg/', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'django',
            title:'project3',
            image:p1,
            description:'this is project 1 description',
            links:[
                {link:'https://www.google.com.eg/', icon:<FacebookIcon />},
                {link:'https://www.google.com.eg/', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'react',
            title:'project1',
            image: p1,
            description:'this is project 1 description',
            links:[
                {link:'https://www.google.com.eg/', icon:<FacebookIcon />},
                {link:'https://www.google.com.eg/', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'react',
            title:'project1',
            image: p1,
            description:'this is project 1 description',
            links:[
                {link:'https://www.google.com.eg/', icon:<FacebookIcon />},
                {link:'https://www.google.com.eg/', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'react',
            title:'project1',
            image: p1,
            description:'this is project 1 description',
            links:[
                {link:'https://www.google.com.eg/', icon:<FacebookIcon />},
                {link:'https://www.google.com.eg/', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'react',
            title:'project1',
            image: p1,
            description:'this is project 1 description',
            links:[
                {link:'https://www.google.com.eg/', icon:<FacebookIcon />},
                {link:'https://www.google.com.eg/', icon:<GitHubIcon />},
            ]
        },
    ]

}

export default profileData