import React, { Component } from 'react';

class Case extends Component {
    render() {
        const {onPlay, caseInfo} = this.props
        return ( 
            <div className="case" onClick={() => { onPlay(caseInfo) }} case={caseInfo.status}>
                {caseInfo.status !== "available" && caseInfo.status}
            </div>
        );
    }
}

export default Case;