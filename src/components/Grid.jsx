import React from 'react'
import Word from './Word'
import CurrentWord from './CurrentWord'
import EmptyLine from './EmptyLine'

function Grid({guesses, currentGuess, secretWord}) {
 
  let emptyLinesNumber = guesses.length === 6 ? 0 : 6 - (guesses.length + 1 ) 

 
 
  return (
    <div className='grid'>
      {guesses.map((guess, i) =>{
        return (
          <Word key={i} secretWord={secretWord} guess={guess} />
        )
      })}
      
     { guesses.length < 6 && <CurrentWord currentGuess={currentGuess}/> }
       
       { Array(emptyLinesNumber).fill(0).map((el, i)=> {
        return (
          <EmptyLine key={i}/>
        )
       })}
       
      
   
   
   
    </div>
  )
}

export default Grid