export const gameStatus = ( str, arrayStrings) => {
  const secretWord = str.toLowerCase()
  const guesses = arrayStrings.map(word => word.toLowerCase())
  if(guesses.includes(secretWord)) {
    return 'WINNER'
  } else if (guesses.length === 6) {
    return 'LOOSER'
  } else {
    return 'PLAYER'
  }
}