import React, { useEffect } from 'react'
import KeyboardRow from './KeyboardRow'

function Keyboard({ onLetterPress, deleteLastLetter, addGuess, keyboardBackgroudColor}) {
  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ]

  
  useEffect(() => {    
    const handleKeyDown = (e) => {
      // console.log(e.key);
     if(e.key === "Enter") {
      addGuess()
     }  else if(e.key === 'Backspace') {
      deleteLastLetter()
     } else if(keyboardRows.flat().includes(e.key.toUpperCase())) {
      onLetterPress(e.key)
     }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className='keyboard'>
      <div className='keyboard-row'>
        <KeyboardRow row={keyboardRows[0]} onLetterPress={onLetterPress} keyboardBackgroudColor={keyboardBackgroudColor} />
      </div>
      <div className='keyboard-row'>
        <KeyboardRow row={keyboardRows[1]} onLetterPress={onLetterPress} keyboardBackgroudColor={keyboardBackgroudColor} />
      </div>
      <div className='keyboard-row'>
        <button className='keyboard-button' onClick={addGuess}>ENTER</button>
        <KeyboardRow row={keyboardRows[2]} onLetterPress={onLetterPress} keyboardBackgroudColor={keyboardBackgroudColor} />
        <button className='keyboard-button' onClick={deleteLastLetter}>BACKSPACE</button>
      </div>


  

    </div>
  )
}

export default Keyboard