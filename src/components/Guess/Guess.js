import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer}) {
  //value -> {}
  //checkedValue -> [{},{}]
  let checkedValue;

  if (value) {
    checkedValue = checkGuess(value.answer, answer);
  }

  return (
    <p className="guess">
      {range(5).map((cell) => (
        <span
          className={
            checkedValue ? `cell ${checkedValue[cell].status}` : 'cell'
          }
          key={value ? `${value.id}-${cell}` : cell}
        >
          {value ? value.answer[cell] : undefined}
        </span>
      ))}

    </p>


  );
}

export default Guess;
