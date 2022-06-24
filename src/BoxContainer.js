import React, { Component} from 'react';
import Boxes from './Boxes';
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes : 22,
        allColors: ['purple', 'red', 'blue', 'darkblue', 'black']
        
    }
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(()=> (
            <Boxes colors={this.props.allColors}/>
        ))
        return (
        <div className='BoxContainer'>
            {boxes}
        </div>
        )
    }
}

export default BoxContainer;