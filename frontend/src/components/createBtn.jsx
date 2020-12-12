import React, { Component } from 'react';

class CreateBtn extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="btnContainer">
            <button id="createBtn" onClick={this.props.onCreate}>Create a new game</button>
        </div>
         );
    }
}
 
export default CreateBtn;