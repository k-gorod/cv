import React from 'react';
import { globalFunctions } from '../../constants';
import store from '../../store';
import './index.scss'
import Opt from './Opt';

interface SelectProps {
    options: string[],
    height: number,
}

class CustomSelect extends React.Component<SelectProps>{
    state = {
        active: false
    }
    selectClick = () => {
        this.setState({
            active:true
        })
    }
    closeSelect = () => {
        if(this.state.active){
            this.setState({
                active:false
            })
        }
    }
    componentDidMount(){
        globalFunctions.closeSelect = this.closeSelect;
    }
    render(){
        
        const optsArr: string[] = this.props.options;
        const options: JSX.Element[] = [];
        for (let i = 0; i < optsArr.length; i++) {
            options.push(<Opt   
                key = {"opt-"+i} 
                z={store.getState().lang===optsArr[i]?2:1} 
                pos={this.state.active?i:0} 
                value={optsArr[i]} 
                height={this.props.height} 
                closeSelect={this.closeSelect}
                disable={i>1}/>
            )
        }
        return (
            <div className='select'> 
                <div className='select__wrp' onClick={this.selectClick}  style={{zIndex: this.state.active?0:optsArr.length+1}}>
                </div>
                {options}
            </div>
        )
    }
    
}

export default CustomSelect;