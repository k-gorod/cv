import React from 'react'
import { globalFunctions } from '../../constatns';
import { WindowSize } from '../../scripts/useWindowSize';
import LangSwitcher from '../LangSwitcher';
import './index.scss'


interface props {
    style: WindowSize
}

const  Wrapper: React.FC<props> = (props) => {
    // const [menuState,setMenuState] = useState('hide')
    const clickHandler = (e: any) => {
        if(!e.target.classList.contains('select__opt')&&!e.target.classList.contains('select__wrp'))globalFunctions.closeSelect();
        
    }
    const mouseMoving = (e: any) => {
        
        
    }
    return (
        <div style={props.style} className='cv__wrapper' onClick={(e)=>{clickHandler(e)}} onMouseMove={(e)=>{mouseMoving(e)}}>
            
            {/* <div className='cv__wrapper__img'></div> */}
            <LangSwitcher />
        </div>
    );
}
export default Wrapper;