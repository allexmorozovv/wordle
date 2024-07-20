import React from 'react'

const actionColors = {
  ABSENT: "#787C7E",
  PRESENT: "#C9B458",
  CORRECT: "#6AAA64"
}

function KeyboardRow({  row, keyboardBackgroudColor, onLetterPress}) {

  return row.map((el,i) => {
    const background = actionColors[keyboardBackgroudColor[el.toLowerCase()]]
    // const background = 'aqua'

    return (
      <div key={i} className='keyboard-item' style={{background}} onClick={() => { onLetterPress(el) }}>{el}</div>
    )
  })
}
  

export default KeyboardRow