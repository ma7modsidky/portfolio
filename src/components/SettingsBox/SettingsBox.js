import React, {useState} from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import CustomButton from '../Button/Button'
import colors from './colors'
import './settingsBox.scss';


function SettingsBox() {
    let main_color=localStorage.getItem('main_color');
    if (main_color !== null) {
        document.documentElement.style.setProperty('--main-color', main_color);
    }
    const [isActive, setActive] = useState(false);
    const openSettings = () => {
        isActive?setActive(false):setActive(true)
    }
    
    const changeColor = (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem('main_color',e.target.dataset.color);
        e.target.parentElement.querySelectorAll('.active').forEach(element =>{
            element.classList.remove('active')
        })
        e.target.classList.add('active')
    }

    const resetColor = (e) => {
        document.documentElement.style.setProperty('--main-color', '#ffc500');
        localStorage.setItem('main_color', '#ffc500');
        document.querySelectorAll('.active').forEach(element =>{
            element.classList.remove('active')
        })
        document.querySelector('.color_box').classList.add('active')
    }  
    
    return (
        <div className={!isActive?'settings':'settings open'}>
            <div className='settings_gear container_shadow' onClick={openSettings}>
                <SettingsIcon/>
            </div>
            <div className={isActive?'settings_container':'settings_container open'}>
                <h4>select a color</h4>
                <div className="settings_colors">
                    {colors.map((color,index) => (
                        <div 
                        key={index}
                        className={main_color === color.color?"color_box active":"color_box"}
                        data-color={color.color} 
                        style={{backgroundColor: color.color}}
                        onClick={changeColor}></div>
                    ))}
                </div>
                <CustomButton text={"reset"} click={resetColor} />
            </div>
        </div>
    )
}

export default SettingsBox
