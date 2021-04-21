import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import p1 from '../assets/images/projects/placeholder.png';
//projects photos
import easybank from '../assets/images/projects/easybank.png';
import loopstudios from '../assets/images/projects/loopstudios.png';
import pricing from '../assets/images/projects/pricing.png';
import portfoliosite from '../assets/images/projects/portfoliosite.png';
import ecommerce from '../assets/images/projects/ecommerce.png';

const portfolioData = [
        {
            tag:'django',
            title:'full ecommerce site',
            image: ecommerce,
            description:'online shop site created with django3 and template engine',
            links:[
                {name:'live preview', link:'http://ma7modsidky.pythonanywhere.com/en/',},
                {name:'Github', link:'https://github.com/ma7modsidky/Ecommerce_Django', icon:<GitHubIcon />},
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