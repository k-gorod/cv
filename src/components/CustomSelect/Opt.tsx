import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLang } from '../../reducers/Lang';
import './index.scss'
interface OptProps {
    value: string;
    pos: number,
    height: number
    z: number,
    closeSelect: ()=>void
}
const Opt: React.FC<OptProps> = (props) => {
    const dispatch = useDispatch();
    const click = () => {
        dispatch(changeLang(props.value))
        props.closeSelect()
    }
    return (
        <div style={{height: props.height,zIndex: props.z,transform: `translateY(${props.pos*110}%)`}} className='select__opt' onClick={click}>
            {props.value}
        </div>
    )
}

export default Opt;