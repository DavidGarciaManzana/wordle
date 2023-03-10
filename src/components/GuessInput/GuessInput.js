import React from 'react';
import {checkGuess} from '../../game-helpers' //TODO remove unusable code

function GuessInput({ handlePreviousGuesses,gameOver}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handlePreviousGuesses(tentativeGuess)
        setTentativeGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => setTentativeGuess(event.target.value.toUpperCase())}
        pattern="[A-Z]{5}" title="Must contain five characters"
        disabled={gameOver !== 'running'}

      />
    </form>
  );
}

export default GuessInput;
