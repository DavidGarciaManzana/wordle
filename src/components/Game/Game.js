import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import PreviousGuess from '../PreviousGuess';
import Guess from '../Guess';
import guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handlePreviousGuesses = (tentativeGuess) => {
    const newObject = {
      answer: tentativeGuess,
      id: crypto.randomUUID(),
    };
    let newArray = [...guesses,newObject];
    setGuesses(newArray);
  };
  return (
    <>
      <PreviousGuess guesses={guesses} answer={answer}></PreviousGuess>
      <GuessInput handlePreviousGuesses={handlePreviousGuesses} ></GuessInput>
    </>
  );
}

export default Game;
