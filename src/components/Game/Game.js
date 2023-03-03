import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import PreviousGuess from '../PreviousGuess';
import Guess from '../Guess';
import guess from '../Guess';
import Banner from '../Banner'; // TODO remove unusable code
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState('running');
  // console.log(guesses.length) //TODO remove comments

  const handlePreviousGuesses = (tentativeGuess) => {
    const newObject = {
      answer: tentativeGuess,
      id: crypto.randomUUID(),
    };
    let newArray = [...guesses, newObject];
    setGuesses(newArray);
    let game;
    if (tentativeGuess === answer) {
      game = 'won';
      setGameOver(game);
    } else if (newArray.length === NUM_OF_GUESSES_ALLOWED) {
      game = 'lost';
      setGameOver(game);
    }
  };

  return (
    <>
      <PreviousGuess guesses={guesses} answer={answer}></PreviousGuess>
      <GuessInput
        handlePreviousGuesses={handlePreviousGuesses}
        gameOver={gameOver}
      />
      {gameOver === 'won' && <HappyBanner guessesLength={guesses.length} />}
      {gameOver === 'lost' && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
