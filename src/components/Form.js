import React from 'react';
import { TextField, Button } from '@material-ui/core';


const Form = ({ returnGuessToApp }) => {

    const onSubmit = (event) => {
        event.preventDefault()
        var guess = event.target.elements.guess.value
        if (guess <= 100 && guess > 0) {
            returnGuessToApp(guess)
        }
        else {
            alert("Input Must Be Between 1 - 100")
        }

        event.target.elements.guess.value = null
    }

    const howToPlay = () => {
        alert("Hey, This is Guess The Number Team, This is a gusessing")
    }

    return (
        <div>
            <form style={{ marginTop: '20px' }} onSubmit={onSubmit}>
                <TextField style={{ paddingBottom: '20px' }}
                    fullWidth
                    type="number"
                    name="guess"
                    label="Enter Your Guess"
                    required
                />
                <Button fullWidth variant="contained" color="primary" type="submit">Guess</Button>
            </form>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={howToPlay}
                style={{ marginTop: '10px' }}
            >
                How To Play?
            </Button>
        </div>
    )
}

export default Form;