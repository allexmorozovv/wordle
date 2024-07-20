// export const coloredWord = (secretWord, guess) => {
//   const colors = []
//   for(let i = 0; i < secretWord.length; i ++){
//     if(secretWord[i] === guess[i]) {
//       colors.push('CORRECT')
//       // secretWord[i] = 1
//     } else if(secretWord.includes(guess[i])) {
//       colors.push('PRESENT')
//     }
//     else{
//       colors.push('ABSENT')
//     }
//   }
//   return colors
// }

export const coloredWord = (secretWord, guess) => {
  let copySecretWord = secretWord.toLowerCase()
  const copyGuess = guess.toLowerCase()

  const colors = new Array(5)
 
  for(let i = 0; i < copySecretWord.length; i++) {
    if(copySecretWord[i] === copyGuess[i]){
      colors[i] = 'CORRECT'
      copySecretWord = copySecretWord.replace(copySecretWord[i], '@')
    } else {
      colors[i] = 'ABSENT'
    }
  }
 
  for(let i = 0; i < copySecretWord.length; i++) {
    if(copySecretWord.includes(copyGuess[i])  && colors[i] !== 'CORRECT'){
      colors[i] = 'PRESENT'
      copySecretWord = copySecretWord.replace(copyGuess[i], '@')
    } 
  }
  return colors
}

