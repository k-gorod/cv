import React from 'react'
import './index.scss'
import MenuPoint from './MenuPoint'

interface menuProps {
    isOpen: boolean
}

const Menu : React.FC<menuProps> = (props) => {
    const ar = ["1 point","2 point","3 point","4 point","5 point"]

    const menuPoints = () => {
        const res = [];
        for (let i = 0; i < ar.length; i++) {
            res.push(
                <MenuPoint 
                    key={'mPoint-'+i} 
                    pos={i+1} 
                    value={ar[i]} 
                    menuState={props.isOpen}
                />
            )
        }
        return res;
    }
  
    return (
        <div className={`cv__menu ${props.isOpen&&'cv__menu-active'}`}>
            <nav className='cv__menu__nav'>
                {menuPoints()}
            </nav>
        </div>
    )
}
export default Menu;