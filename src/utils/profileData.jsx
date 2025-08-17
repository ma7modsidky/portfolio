
//social icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

//services icons
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';
import MobileFriendlySharpIcon from '@mui/icons-material/MobileFriendlySharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';

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
import tailwindSolid from '@iconify/icons-teenyicons/tailwind-solid';
import nginxIcon from '@iconify/icons-cib/nginx';
import nodejsOutline from '@iconify/icons-teenyicons/nodejs-outline';
import mongodbOutline from '@iconify/icons-teenyicons/mongodb-outline';



const profileData = {
    name: 'Mahmoud Sidky',
    title: 'Full Stack Web Developer / Software Engineer',

    birthDay: '1 January 1995',
    email: 'mahmoudsidky@outlook.com',
    address: 'Egypt, Cairo',
    phone: '+201111504980',

    socials: {
        Facebook: {
            link: '',
            text: 'facebook',
            icon: <FacebookIcon />
        },
        Twitter: {
            link: '',
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
        programming_languages: {
            python:{
                name:'python',
                icon: <Icon icon={bxlPython} />,
            },
            js:{
                name:'Javascript',
                icon: <Icon icon={bxlJavascript} />,
            },
            
        },
        frontend: {
            html: {
                name:'html5',
                icon: <Icon icon={htmlFive2} />,
            },
            css:{
                name:'css3',
                icon: <Icon icon={bxlCss3} />,
            },
            
            sass:{
                name:'Sass',
                icon: <Icon icon={sassAlt} />,
            },
            react:{
                name:'react',
                icon: <Icon icon={reactIcon} />,
            },
            tailwind:{
                name:'tailwind',
                icon: <Icon icon={tailwindSolid} />
            },
            bootstap:{
                name:'bootstrap',
                icon: <Icon icon={bxlBootstrap} />,
            },

        },
        backend: {
            
            django:{
                name:'django',
                icon: <Icon icon={bxlDjango} />,
            },
            nodejs:{
                name:'Node JS',
                icon: <Icon icon={nodejsOutline} />,
            },
            mongo:{
                name:'Mongo DB',
                icon: <Icon icon={mongodbOutline} />,
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
            },
            Nginx:{
                name:'Nginx',
                icon: <Icon icon={nginxIcon} />,
            },

        }
    },

}

export default profileData