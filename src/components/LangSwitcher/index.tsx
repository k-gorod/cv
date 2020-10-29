import React from 'react'
import CustomSelect from '../CustomSelect'
import './index.scss'


const LangSwitcher :  React.FC = () => {
    const clickHandler = () => {

    }
    const arrayOfOpts = ['Eng','Ru', 'Pol', 'Bel']
    return (
        <div className='cv__lang' onClick={clickHandler}>
            <CustomSelect options={arrayOfOpts} height={25}/>
        </div>
    )
}
export default LangSwitcher;