import React from 'react'
import { coloredWord } from '../domaiin/coloredWord'

const actionColors = {
  ABSENT: "#787C7E",
  PRESENT: "#C9B458",
  CORRECT: "#6AAA64"
}

function Word({secretWord, guess}) {
  
  const bgColors = coloredWord(secretWord, guess)
 
  const guessArr = guess.split('')


  return (
    <div className='word-line'>
      {guessArr.map((el, i) => {
        const background = actionColors[bgColors[i]]

        return (
          <div key={i} className='word-element' style={{background}}>{guess[i]}</div>
        )
      })}
    </div>
  )
}

export default Word