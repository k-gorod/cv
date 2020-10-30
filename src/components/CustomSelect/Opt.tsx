import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLang } from '../../reducers/Lang';
import './index.scss'
interface OptProps {
    value: string;
    pos: number,
    height: number
    z: number,
    closeSelect: ()=>void,
    disable:boolean
}
const Opt: React.FC<OptProps> = (props) => {
    const dispatch = useDispatch();
    const click = () => {
        !props.disable&&dispatch(changeLang(props.value))
        props.closeSelect()
    }
    const style = {
        height: props.height,
        zIndex: props.z,
        transform: `translateY(${props.pos*110}%)`,
        color: props.disable?'rgba(0, 0, 0, 0.2)':'  rgb(57, 170, 51)'
    }
    return (
        <div style={style} className='select__opt' onClick={click}>
            {props.value}
        </div>
    )
}

export default Opt;