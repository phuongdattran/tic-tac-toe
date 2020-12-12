import React, { Component } from 'react';

class JoinBtn extends Component {

    render() { 
        
        return ( 
            <div id="btnContainer">
                
                    <label>Game Id</label>
                    <input type='text' id= 'gameId' name='gameId' value={this.props.gameId} onChange={this.props.onChange} />
                    <button id="joinBtn" onClick={this.props.onJoin}>Join</button>
                
            </div>
        );
    }
}
 
export default JoinBtn;