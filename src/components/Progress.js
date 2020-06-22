import React from 'react'
import './Progress.css'
import { Typography } from '@material-ui/core'
const Progress = ({ attempt, guessList }) => {
    return (
        <div>
            <Typography style={{ marginTop: '30px' }} variant="h2">Guess {attempt}</Typography>
            <ul className="progressBar_history">
                {guessList}
            </ul>
        </div>
    )
}

export default Progress