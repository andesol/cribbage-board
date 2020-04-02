import React from 'react'
import classes from './IndividualScore.module.css'

const IndividualScore = (props) => {
    return (
        <div className={classes.IndividualScore}>
            {props.score}
        </div>
    )
}

export default IndividualScore
