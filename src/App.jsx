import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './Flashcard'

function App() {
  const [count, setCount] = useState(1)

  const [flipped, setFlipped] = useState(false)
  

  const Flashcards = [
    {
      id: 1,
      question:'How many baloon dors does Lionel Messi have?',
      answer:'8'
    },
    {
      id: 2,
      question:'Which soccer club has the most Champions Leagues?',
      answer:'Real Madrid'
    },
    {
      id: 3,
      question:'Where was the last World Cupp taken place?',
      answer:'Qatar'
    },
    {
      id: 4,
      question:'Which country is Cristiano Ronaldo from?',
      answer:'Portugal'
    },
    {
      id: 5,
      question:'Which country has the most World Cups?',
      answer:'Brazil'
    },
  ]

  const Back = () => {
    if (count > 0) {
      setCount(count - 1)
      setFlipped(false)
    }
  }

  const Next = () => {
    if (count < 4) {
      setCount(count + 1)
      setFlipped(false)
    }
  }

  return (
    <>
      <Flashcard 
      id={Flashcards[count].id} 
      question={Flashcards[count].question} 
      answer={Flashcards[count].answer}
      flipped={flipped}
      setFlipped={setFlipped}>
      </Flashcard>
      <button onClick={Back}>Back</button>
      <button onClick={Next}>Next</button>
    </>
  );
}

export default App
