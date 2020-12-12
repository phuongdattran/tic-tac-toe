import React, { Component } from 'react';

class CurrentPlayer extends Component {
    
    render() { 
        const {player, clientId} = this.props;
        return ( 
            <div className="currentPlayer">
                {player === clientId ? 'You are' : 'Opponent is'} playing
            </div>
        );
    }
}

export default CurrentPlayer;