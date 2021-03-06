import React, { useState } from 'react'
import { globalFunctions } from '../../constants';
import { WindowSize } from '../../scripts/useWindowSize';
import LangSwitcher from '../LangSwitcher';
import Menu from '../Menu';
import './index.scss'
import Content from '../Content';


interface props {
    style: WindowSize,
    windowWidth: number,
    lang: string
}

const  Wrapper: React.FC<props> = (props) => {
    
    const [menuIsOpen,setMenuIsOpen] = useState(false)
    const clickHandler = (e: any) => {
        if(!e.target.classList.contains('select__opt')&&!e.target.classList.contains('select__wrp'))globalFunctions.closeSelect();
        
    }
    const mouseMoving = (e: any) => {
        console.log();
        
        if(e.clientX<(props.windowWidth/10)&&!menuIsOpen){
            setMenuIsOpen(true)
        }
        if(e.clientX>(props.windowWidth/3)&&menuIsOpen){
            setMenuIsOpen(false)
        }
    }
     
    return (
        <div style={props.style} className='cv__wrapper' onClick={clickHandler} onMouseMove={mouseMoving}>
            
            {/* <div className='cv__wrapper__img'></div> */}
            <LangSwitcher />
            <Menu isOpen={menuIsOpen}/>
            <Content />
            
        </div>
    );
}
export default Wrapper;