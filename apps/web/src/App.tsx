import React from 'react';
import './App.css';
import Quiz, { Answer } from './Quiz';

export interface Question {
  text: string;
  answers: Answer[];
}

function App() {
  const questions: Question[] = [
    {
      text: 'What is the capital of France?',
      answers: [
        { id: 'a1', text: 'Paris', isCorrect: true },
        { id: 'a2', text: 'London', isCorrect: false },
        { id: 'a3', text: 'Berlin', isCorrect: false },
        { id: 'a4', text: 'Madrid', isCorrect: false },
      ],
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="m-auto max-w-md text-center rounded border px-10 py-10 w-full">
        <h1 className="text-3xl font-bold underline">PortuQuiz</h1>
        <Quiz questions={questions} />
      </div>
    </div>
  );
}

export default App;
