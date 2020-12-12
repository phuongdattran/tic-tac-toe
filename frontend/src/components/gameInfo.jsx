import React, { Component } from 'react';
import Score from './score';

class GameInfo extends Component {

    render() { 
        const {players, clientId} = this.props;
        return ( 
            <div className="gameInfo">
                {players.map((player, index) => (
                    <Score key={index} player={player} clientId={clientId}/>
                ))}
            </div>
        );
    }
}

export default GameInfo;