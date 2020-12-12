import React, { Component } from 'react';

class Score extends Component {

    render() { 
        const {clientId, player} = this.props
        return ( 
            <div>
                {player.clientId === clientId ? 'You' : 'Opponent'}: {player.score} 
            </div>
        );
    }
}

export default Score;