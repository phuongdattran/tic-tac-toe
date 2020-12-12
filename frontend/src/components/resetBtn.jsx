import React, { Component } from 'react';

class ResetBtn extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="btnContainer">
                <button id="resetBtn" onClick={this.props.onReset}>Reset</button>
            </div>
         );
    }
}
 
export default ResetBtn;