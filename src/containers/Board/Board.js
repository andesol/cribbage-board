import React, { Component } from 'react'
import SharedArea from '../../components/SharedArea/SharedArea';
import IndividualPanel from '../../components/IndividualPanel/IndividualPanel';

import classes from './Board.module.css';

class Score extends Component {
    state = {
        'Score1': 0,
        'Score2': 0,
    }
    plusOne = (player) => {
        switch (player) {
            case 'player1':
                if (this.state.Score1 < 121) {
                    const newScore = this.state.Score1 + 1;
                    this.setState({ 'Score1': newScore })
                }
                break;
            case 'player2':
                if (this.state.Score2 < 121) {
                    const newScore = this.state.Score2 + 1;
                    this.setState({ 'Score2': newScore })
                }
                break;
            default:
                break;
        }
    }
    minusOne = (player) => {
        switch (player) {
            case 'player1':
                if (this.state.Score1 > 0) {
                    const newScore = this.state.Score1 - 1;
                    this.setState({ 'Score1': newScore })
                }
                break;
            case 'player2':
                if (this.state.Score2 > 0) {
                    const newScore = this.state.Score2 - 1;
                    this.setState({ 'Score2': newScore })
                }
                break;
            default:
                break;
        }
    }
    resetScore = () => {
        this.setState({ 'Score1': 0, 'Score2': 0 })
    }
    render() {
        return (
            <>
                <div className={classes.rotate}>
                    <IndividualPanel
                        score={this.state.Score1}
                        increaseScore={() => this.plusOne('player1')}
                        decreaseScore={() => this.minusOne('player1')} />
                </div>
                <SharedArea reset={this.resetScore} />
                <IndividualPanel
                    score={this.state.Score2}
                    increaseScore={() => this.plusOne('player2')}
                    decreaseScore={() => this.minusOne('player2')} />
            </>
        )
    }
}
export default Score