import React from 'react'
import { arrayOfOpts } from '../../constatns'
import CustomSelect from '../CustomSelect'
import './index.scss'


const LangSwitcher :  React.FC = () => {
    const clickHandler = () => {

    }
    
    return (
        <div className='cv__lang' onClick={clickHandler}>
            <CustomSelect options={arrayOfOpts} height={25}/>
        </div>
    )
}
export default LangSwitcher;