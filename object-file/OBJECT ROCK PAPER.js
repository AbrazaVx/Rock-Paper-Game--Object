const score = JSON.parse(localStorage.getItem('score'));


  function effectButton (playGame) {

    const result = clickButton();

let randomSelection = '';

if (playGame === 'Scissors') {
    if (result === 'rock') {
  randomSelection = 'You loose!';
  } else if (result === 'paper') {
  randomSelection = 'You won';
  } else if (result === 'Scissors') {
  randomSelection = 'tied';
  }

} else if (playGame === 'paper') {
  if (result === 'paper') {
      randomSelection = 'tied';
    } else if (result === 'rock') {
      randomSelection = 'You won';
    } else if (result === 'Scissors') {
      randomSelection = 'You loose!';
    }

} else if (playGame === 'rock') {
  if (result === 'rock') {
      randomSelection = 'tied';
    } else if (result === 'paper') {
      randomSelection = 'You won';
    } else if (result === 'Scissors') {
      randomSelection =   'You loose!';
    }
}
  if (randomSelection === 'You won') {
    score.wins += 1;
  } else if (randomSelection === 'You loose!') {
    score.losses += 1;
  } else if (randomSelection === 'tied') {
    score.ties += 1;
  }
localStorage.setItem('score', JSON.stringify(score));

alert(`You picked ${playGame}, computer picked ${result}. ${randomSelection}
Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}.
`)

  }

  function clickButton() {
    let result = '';
    const computerMove = Math.random();
    if (computerMove < 0.3) {
      result = 'paper';
    } else if (computerMove >= 0.3 && computerMove < 0.6) {
      result = 'rock';
    } else if (computerMove >= 0.6 && computerMove < 1) {
      result = 'Scissors';
    }
    return result;
  }