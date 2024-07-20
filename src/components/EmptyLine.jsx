import React from 'react'

function EmptyLine() {
  return (
    <div className='empty-line'>
      {Array(5).fill(0).map((line,i)=>{
        return(
          <div key={i}className='empty-element'></div>
        )
      })}
    </div>
  )
}

export default EmptyLine