import { useState } from "react";
import wordList from "../src/wordList.json";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
function App() {

  const [correctWord, setCorrectWord] = useState(()=>{
      return wordList[Math.floor(Math.random()*wordList.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const inCorrectLetters= 'adasd'
  
  return(
    <div style={{
      maxWidth:"800px",
      display:"flex",
      flexDirection:"column",
      gap:"2rem",
      margin:"0 auto",
      alignItems:"center"
    }}>
      <div style={{
        fontSize:"2rem",
        textAlign:"center"
      }}>
        Lose - Win
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={correctWord}/>
      <Keyboard/>
    </div>
  )
}

export default App
