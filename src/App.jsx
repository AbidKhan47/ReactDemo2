import { useState } from 'react'
import './App.css'
import Flashcard from './Flashcard'

function App() {
  const [count, setCount] = useState(1)
  const [flipped, setFlipped] = useState(false)

  const Flashcards = [
    {
      id: 1,
      question: 'How many Ballon d\'Ors does Lionel Messi have?',
      answer: '8'
    },
    {
      id: 2,
      question: 'Which soccer club has the most Champions Leagues?',
      answer: 'Real Madrid'
    },
    {
      id: 3,
      question: 'Where was the last World Cup held?',
      answer: 'Qatar'
    },
    {
      id: 4,
      question: 'Which country is Cristiano Ronaldo from?',
      answer: 'Portugal'
    },
    {
      id: 5,
      question: 'Which country has the most World Cups?',
      answer: 'Brazil'
    },
    {
      id: 6,
      question: 'Which country won the first-ever FIFA World Cup in 1930?',
      answer: 'Uruguay'
    },
    {
      id: 7,
      question: 'Which country has won the most FIFA Women\'s World Cup titles?',
      answer: 'USA'
    },
    {
      id: 8,
      question: 'What is the name of the Spanish football rivalry between Real Madrid and Barcelona?',
      answer: 'El-Clásico'
    },
    {
      id: 9,
      question: 'Who was the youngest player to score in a FIFA World Cup final?',
      answer: 'Pelé (at 17 years old)'
    },
    {
      id: 10,
      question: 'Which country hosted the 1994 FIFA World Cup?',
      answer: 'USA'
    },
  ]

  const Back = () => {
    if (count > 0) {
      setCount(count - 1)
      setFlipped(false)
    }
  }

  const Next = () => {
    if (count < Flashcards.length - 1) {
      setCount(count + 1)
      setFlipped(false)
    }
  }

  return (
    <>
      <div className="bg-[url('https://i.etsystatic.com/38660474/r/il/12429e/4352455753/il_fullxfull.4352455753_jinn.jpg')] bg-cover bg-center fixed inset-0 flex flex-col justify-center items-center text-center min-h-screen">
          <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-bold font-serif mb-10">
                Soccer Trivia Questions
              </h1>
              <h4 className="text-white mb-6">How good is your soccer knowledge? Test your knowledge about soccer here!</h4>
              <h4 className="text-white mb-6">Number of Flashcards: 10</h4>
              <Flashcard
                id={Flashcards[count].id}
                question={Flashcards[count].question}
                answer={Flashcards[count].answer}
                flipped={flipped}
                setFlipped={setFlipped}
              />
              <div className="mt-10 space-x-4">
                <button onClick={Back} className="px-4 py-2 bg-blue-500 text-white rounded">Back</button>
                <button onClick={Next} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default App;