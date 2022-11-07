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

  const items = [
    {name : 'Bike', price:100},
    {name : 'TV', price:200},
    {name : 'Album', price:10},
    {name : 'Book', price:1},
    {name : 'Phone', price:150},
    {name : 'Computer', price:100}
  ]

  const items2=[1,2,3,4,5,6]

  const includesTwo = items2.includes(12)
  console.log("includesTwo",includesTwo)



  // Nos sirve para filtrar casos: True or False
  const filterItems = items.filter((item) => {
    return item.price === 100
  })
  // Nos sirve para encontrar UN ITEM que cumpla tal condición
  const findItem = items.find((item) =>{
    return item.name ==='Book'
  })
  // forEach, nos sirve para iterar como un for loop
  items.forEach((item) =>{
    console.log(item.price);
    console.log(item.name)
  })
  // Si ALGÚN elemento es XXXXXXX
  const hasItemsExpensives = items.some((item) =>{
    return item.price >1000
  })
  console.log("hasItemsExpensives",hasItemsExpensives)

  // Si TODOS los elementos son XXXXXXXXX
  const hasAllItemsInexpensives = items.every((item)=>{
    return item.price <1000
  })
  console.log("hasAllItemsInexpensives",hasAllItemsInexpensives)
  console.log(findItem)
  console.log({filterItems});
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
