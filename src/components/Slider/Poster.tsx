import React from 'react';
import { resData } from '../MovieSearchBlock';

interface posterImgProps {
    data : resData,
    active: number,
    thisNumb: number
}

const PosterImg: React.FC<posterImgProps>= (props)=>{
    const style = {
        transform:props.active>props.thisNumb?"translateX(-100%) scale(0.1)":props.active<props.thisNumb?"translateX(100%) scale(0.1)":""
    }
    return (
        <div className='movieBlock__poster poster' style={style}>
            <div className="poster__img" style={{background:`url(${props.data.Poster}) center/80% no-repeat`}}></div>
            <p>{props.data.Title}</p>
            <p>{props.data.Year}</p>
        </div>
    )
} 

export default PosterImg;