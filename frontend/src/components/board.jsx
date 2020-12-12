import React, { Component } from 'react';
import Case from './case';

class Board extends Component {
    render() { 
        const {size, onPlay, caseInfo} = this.props;
        let board = [];
        for (let i=0; i<size; i++) {
            board.push(i);
        }

        return ( 
            <div id="board">
                {board.map((caseInBoard, index) => (
                    <Case key={index} onPlay={onPlay} caseInfo={caseInfo[index]} />
                ))}
            </div>
        );
    }
}

export default Board;