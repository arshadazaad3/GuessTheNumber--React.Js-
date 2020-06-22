import React from 'react';
import { Grid, Typography, Paper, Divider } from '@material-ui/core'
import Form from './components/Form'
import { GenerateNumber } from './Util'
import Progress from './components/Progress';


class App extends React.Component {

  state = {
    randomNumberGen: GenerateNumber(),
    guess: undefined,
    allGuesses: [],
    attempt: 0,
  }

  updateAppState = (guess) => {

    console.log("Random # Gen : " + this.state.randomNumberGen)
    //Absolute Difference
    const absDiff = Math.abs(guess - this.state.randomNumberGen)

    console.log("Difference: " + absDiff)

    var range = this.findRange(absDiff)

    this.setState(prev => ({
      guess,
      allGuesses: [...prev.allGuesses, { guess }],
      attempt: prev.attempt + 1,
    }))

    console.log(range)

  }

  findRange = (difference) => {
    var x

    if (difference === this.state.randomNumberGen) {
      x = "Correct!"
    }
    else if (difference > 75) {
      x = "Too Far"
    }
    else if (difference > 50) {
      x = "far"
    }
    else if (difference > 25) {
      x = "close"
    }
    else {
      x = "very close"
    }

    return x

  }

  render() {
    const { allGuesses, attempt, } = this.state;

    const GuessList = allGuesses.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ));
    return (
      <div style={{display:'flex'}}>
        <Grid container style={{ height: '100vh' }} justify='center' alignItems="center">
          <Grid item xs={4}>
            <Paper style={{ padding: '50px' }} elevation={6}>
              <Typography align='center' variant="h2" gutterBottom>HOT or COLD</Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Form
                returnGuessToApp={value => this.updateAppState(value)}
              />
              <Progress attempt={attempt} guessList={GuessList}></Progress>
            </Paper>
          </Grid>
        </Grid>
        

      </div>
    );
  }
}

export default App;
