import React from 'react';
import Banner from '../Banner';

function HappyBanner({ guessesLength }) {

  return (
    <Banner status={'happy'}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guessesLength === 1 ? '1 guess' : `${guessesLength} guesses`} </strong>.
      </p>
    </Banner>
  );
}

export default HappyBanner;
