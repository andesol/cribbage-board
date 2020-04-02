import React from 'react'
import IndividualScore from '../IndividualScore/IndividualScore'
import Button from '../Button/Button';

import classes from './IndividualPanel.module.css'

const IndividualPanel = (props) => {
    return (
        <div className={classes.IndividualPanel}>
            <IndividualScore score={props.score} />
            <div className={classes.btnGroup}>
                <Button btnType='plus' clicked={props.increaseScore}>+</Button>
                <Button btnType='minus' clicked={props.decreaseScore}>-</Button>
            </div>
        </div>
    )
}

export default IndividualPanel
