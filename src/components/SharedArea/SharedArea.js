import React from 'react'
import Button from '../Button/Button'
import classes from './SharedArea.module.css'

const SharedArea = (props) => {
    return (
        <div className={classes.SharedArea}>
            <Button btnType='reset' clicked={props.reset}>Reset</Button>
        </div>
    )
}

export default SharedArea
