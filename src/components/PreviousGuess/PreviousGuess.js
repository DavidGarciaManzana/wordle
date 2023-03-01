import React from 'react';
import Guess from '../Guess';


function PreviousGuess({ guesses }) {
  return (
    <>
      <Guess guesses={guesses}></Guess>
    </>
  )
}

export default PreviousGuess;
