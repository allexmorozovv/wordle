import React, { useEffect, useState} from "react"
import Grid from "./components/Grid.jsx";
import { fetchData } from "./fetchData.js";
import Keyboard from "./components/Keyboard.jsx";
import { gameStatus } from "./domaiin/gameStatus.js";
import { coloredKeyboard } from "./domaiin/coloredKeyboard.js";

const getInitialState = ()=> {
   return fetchData().then(({ words }) => {
    const secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase()
    // console.log('secret', secret);
    return {
      words,
      guesses: [],
      currentGuess: '',
      secretWord,
    }
  })
}



function App() {
  
  // что передавать и как называть в пропсах
  // status and keyboard backspace
  
  
  const [state, setState] = useState(null)
  console.log('state', state);


    useEffect(() => {
  //     fetchData().then(data => {
  //         const secret = data.words[Math.floor(Math.random() * data.words.length)].toUpperCase()
  //         setState({...state, secretWord:secret}) 
    getInitialState().then((x) => {
      setState(x)
    })
  // })
},[])

if(state === null) {
  return
}


const status =  gameStatus(state.secretWord, state.guesses)
const keyboardBackgroudColor = coloredKeyboard(state.secretWord, state.guesses)




const deleteLastLetter = () => { 
  setState((state)=> {
  return {...state, currentGuess: state.currentGuess.slice(0,-1)}
  })
    
}

const onLetterPress = (letter) => {
  setState((state)=> {
    if (gameStatus(state.secretWord, state.guesses) !== "PLAYER") {
      return state
    }
    if(state.currentGuess.length >= 5) {
     return state
    }
    return   {
      ...state,
       currentGuess: state.currentGuess + letter
    }
  })
}

const addGuess = () => {
  // https://react.dev/reference/react/useState#setstate

  setState((state)=> {
    // if(state.currentGuess.length !== 5 || !words.includes(state.currentGuess)  ) {
    if(state.currentGuess.length !== 5  ) {
      return state
    }
    return {
      ...state,
      guesses: [...state.guesses, state.currentGuess],
      currentGuess: '',
    }; 
  })
  // setState((state)=> {
  //   if(state.currentGuess.length === 5) {
  //     return {...state, currentGuess:''}
  //   } else {
  //     return {...state, currentGuess: state.currentGuess}
  //   }
  // })

}

const handlePlayAgain = ()=> {
  getInitialState().then((x) => {
    setState(x)
  })
}
     
   
// onLetterPress ← props
// handleLetterPress ← local function


// console.log("guesses", guesses);

  return (
    
    <div className="main">
     <h1 className="title">Wordle</h1>

     
   
     <Grid guesses={state.guesses} currentGuess={state.currentGuess} secretWord={state.secretWord}/>
     {/* <Grid state={state}/> */}
     {status === 'WINNER'? <div className="status">You are the champion!!!</div>: ''}
     {status === 'LOOSER'? <div className="status">You are lose. Don't worry !!! <button className='status-button'onClick={handlePlayAgain}>Try again</button></div>: ''}
     <Keyboard onLetterPress={onLetterPress} deleteLastLetter={deleteLastLetter} addGuess={addGuess} currentGuess={state.currentGuess} keyboardBackgroudColor={keyboardBackgroudColor} />
     
    </div>
  );
}

export default App;
