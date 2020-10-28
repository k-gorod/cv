import React from 'react'
import { IWindowSize } from '../../scripts/GetWindowSize';
import './index.scss'


interface props {
    style: IWindowSize
}

const  Wrapper: React.FC<props> = (props) => {
    return (
        <div style={props.style} className='cv__wrapper'>

        </div>
    );
}
export default Wrapper;