import React, { Component } from 'react'
import IndividualScore from '../../components/IndividualScore/IndividualScore'
import Button from '../../components/Button/Button'

class Score extends Component {
    state = {
        'Score1': 0,
        'Score2': 0,
    }
    plusOne(player) {
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
        }
    }
    minusOne(player) {
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
        }
    }

    render() {
        return (
            <div>
                <IndividualScore score={this.state.Score1} />
                <Button clicked={() => this.plusOne('player1')}> + </Button>
                <Button clicked={() => this.minusOne('player1')}> - </Button>

                <IndividualScore score={this.state.Score2} />
                <Button clicked={() => this.plusOne('player2')}> + </Button>
                <Button clicked={() => this.minusOne('player2')}> - </Button>
            </div>
        )

    }
}


export default Score
