import { useState } from 'react';
import { Question } from './App';

export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

const Quiz = ({ questions }: { questions: Question[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  function handleAnswerClick(answer: Answer) {
    setSelectedAnswer(answer);
  }

  function handleNextClick() {
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  }

  const question = questions[currentQuestion];

  return (
    <div>
      <div className="font-bold text-lg mb-4 mt-4">{question.text}</div>

      <div className="space-y-2">
        {question.answers.map((answer: Answer) => (
          <button
            key={answer.id}
            className={`border px-4 py-2 w-full 
              ${
                selectedAnswer?.id === answer.id && answer.isCorrect
                  ? 'border-green-500 bg-green-100 text-green-800'
                  : selectedAnswer?.id === answer.id
                  ? 'border-red-500 bg-red-100 text-red-800'
                  : ''
              }`}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer.text}
          </button>
        ))}
      </div>

      {selectedAnswer?.id && question.answers.find((a) => a.id === selectedAnswer.id && a.isCorrect) && (
        <footer className="fixed bottom-0 left-0 right-0 bg-white p-4">
          {selectedAnswer && (
            <div className="max-w-md mx-auto">
              <button className="bg-blue-500 text-white px-4 py-2" onClick={handleNextClick}>
                Next Question
              </button>
            </div>
          )}
        </footer>
      )}
    </div>
  );
};

export default Quiz;
