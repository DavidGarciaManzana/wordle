import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({ guesses }) {

  return (
    <div className="guess-results">
      {range(6).map((row, index) => (
        <p className="guess" key={index}>
          {
            range(5).map((cell, index) => (
              <span className="cell" key={index}>
                {(guesses[row]&&row<NUM_OF_GUESSES_ALLOWED) && guesses[row].answer[cell]}
              </span>
            ))
          }
        </p>
      ))}
    </div>
  );
}

export default Guess;
