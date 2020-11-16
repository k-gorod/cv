import React from 'react'
import MovieSearchBlock from '../MovieSearchBlock';
import TopBlock from '../TopBlock';
import BotBlock from '../BotBlock';
import './index.scss'

const Content: React.FC = () => {
    const scroll = (e: any) => {
        // console.log(e);
        
     }  
    return (
        <div className='cv__content' onScroll={scroll}>
            <TopBlock />
            <MovieSearchBlock />
            {/* <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p> */}
            <BotBlock />
        </div>
    )
}
export default Content;