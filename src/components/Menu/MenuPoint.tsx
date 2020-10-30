import React, { useEffect, useState } from 'react'

interface MenuPointProps {
    value:string,
    pos:number,
    menuState:boolean
}

const MenuPoint: React.FC<MenuPointProps> = (props) => {
    const [visible,setVisible] = useState(false);
    
    useEffect(()=>{
        if(props.menuState&&!visible){
            setTimeout(()=>{
                setVisible(true)
            },100*props.pos)
        }
        if(!props.menuState)setVisible(false)
    },[props.menuState, props.pos, visible])
   
    return (
        <div className='cv__menu__point' style={{opacity:visible?1:0}}>
            {props.value}
        </div>
    )
}

export default MenuPoint;