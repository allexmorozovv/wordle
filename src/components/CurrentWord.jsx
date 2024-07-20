import React from 'react'

function CurrentWord({currentGuess}) {
  return (
    <div  className='current-line'>
      {Array(5).fill(0).map((el,i) => {
        return (
          <div key={i}  className='current-element'>{currentGuess[i]}</div>
        )
      })}
    </div>
  )
}

export default CurrentWord