import GitHubIcon from '@mui/icons-material/GitHub';
//projects photos
import easybank from '../assets/images/projects/easybank.png';
import loopstudios from '../assets/images/projects/loopstudios.png';
import pricing from '../assets/images/projects/pricing.png';
import portfoliosite from '../assets/images/projects/portfoliosite.png';
import ecommerce from '../assets/images/projects/ecommerce.png';
import realstate from '../assets/images/projects/realstate.png';
import realstate_react from '../assets/images/projects/real_estate_react.jpeg'
import blog from '../assets/images/projects/blog.jpeg';
const portfolioData = [
        {
            tag:'react',
            title:'Blog web application with react and django rest framework',
            image: blog,
            description:'Blog web application with react and django rest framework',
            details: ['Backend application built with django rest framework, SQL database', 'Frontend application with react, styling with SCSS ','User Registeration and Login - jwt token authentication, Profile and user\'s posts and comments management ', 'Nested Categories and subcategories','Rich text posts and comments','Responsive layout and simple design'] ,
            links:[
                {name:'live preview', link:'https://vital-blog-frontend.vercel.app/',},
                {name:'Github', link:'https://github.com/ma7modsidky/vital_blog_frontend/', icon:<GitHubIcon />},
            ],
            stack: ['react', 'django', 'django rest framework', 'scss']

        },
        {
            tag:'react',
            title:'Real Estate website with react',
            image: realstate_react,
            description:'Frontend only application website built with react js',
            links:[
                {name:'live preview', link:'https://react-real-estate-pink.vercel.app/',},
                {name:'Github', link:'https://github.com/ma7modsidky/react_real_estate', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'django',
            title:'full ecommerce site',
            image: ecommerce,
            description:'online shop website created with django3 and template engine',
            details: ['Backend application built with django, SQL database', 'Django template enging, styling with SCSS ','User Registeration and Login - session  authentication','Session shopping cart','Multi Language Arabic / English','Nested Categories and subcategories','Responsive layout and simple design'] ,
            links:[
                {name:'live preview', link:'http://shopdjango.pythonanywhere.com',},
                {name:'Github', link:'https://github.com/ma7modsidky/Ecommerce_Django', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'django',
            title:'Real state website',
            image: realstate,
            description:'Real state website using django, jquer, html and scss',
            details: ['Backend application built with django, SQL database', 'Frontend Django template enging, styling with SCSS ','User Registeration and Login - session  authentication','Search and Filter Functionality with (type/price/area/bedrooms)','Multi Language Arabic / English','multiple project and unit types','Responsive layout and simple design'] ,
            links:[
                {name:'live preview', link:'http://eastavenue.pythonanywhere.com/',},
                {name:'Github', link:'https://github.com/ma7modsidky/east_avenue/', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'html&css',
            title:'Portfolio site',
            image: portfoliosite,
            description:'simple portfolio site for developers or designers',
            links:[
                {name:'live preview', link:'https://ma7modsidky.github.io/',},
                {name:'Github', link:'https://github.com/ma7modsidky/ma7modsidky.github.io', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'html&css',
            title:'Easybank landing page',
            image: easybank,
            description:'Easybank landing page challeng by front-end mentor',
            links:[
                {name:'live preview', link:'https://easybank-landing-page.ma7modsidky.vercel.app',},
                {name:'Github', link:'https://github.com/ma7modsidky/easybank_landing_page', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'html&css',
            title:'loopstudios landing page',
            image: loopstudios,
            description:'loopstudios landing page challeng by front-end mentor',
            links:[
                {name:'live preview', link:'https://loopstudios-landing-page-ma7modsidky.vercel.app/',},
                {name:'Github', link:'https://github.com/ma7modsidky/loopstudios_landing_page', icon:<GitHubIcon />},
            ]
        },
        {
            tag:'html&css',
            title:'interactive Pricing component',
            image: pricing,
            description:'Pricing component challeng by front-end mentor',
            links:[
                {name:'live preview', link:'https://pricing-component-interactive.vercel.app/',},
                {name:'Github', link:'https://github.com/ma7modsidky/pricing_component_interactive', icon:<GitHubIcon />},
            ]
        },
    ]
export default portfolioData