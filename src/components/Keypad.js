import React from 'react';

function Keypad() {
  const handleInput = () => {
    console.log('Entering password...');
  }

  return (
    <input type="password" onChange={handleInput} />
  );
}

export default Keypad;
