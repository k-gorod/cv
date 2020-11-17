import React, { useState } from 'react';
import { resData } from '../MovieSearchBlock';
import './index.scss';
import ActiveZone from './ActiveZone';

interface SliderProps {
    data: resData[]
}
const Silder: React.FC<SliderProps> = (props) => {
    const data = props.data;
    const [activeSlide, setActiveSlide] = useState(0);

    const rightArrowClick = () => {
        if(activeSlide<9){
            setActiveSlide(activeSlide+1)
        }else{
            setActiveSlide(0)   
        }
    }
    const leftArrowClick = () => {
        if(activeSlide>0){
            setActiveSlide(activeSlide-1)
        }else{
            setActiveSlide(9)   
        }
    }
    return (
        <div className='topBlock__slider slider'>
            <div className='slider__counter'>
                <p>{activeSlide+1}/{data.length}</p>
            </div>
            <svg className="slider__arrowLeft" viewBox="0 0 5 9" onClick={leftArrowClick}>
                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
            </svg>
            <ActiveZone data={data} currentSlide={activeSlide}/>
            <svg className="slider__arrowRight" viewBox="0 0 5 9" onClick={rightArrowClick}>
                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
            </svg>
        </div>
    )
}
export default Silder;