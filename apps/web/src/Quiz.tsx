import { useEffect, useState } from "react";
import { Question } from "./App";
import HintButton from "./Hint";

export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

const Quiz = ({ questions }: { questions: Question[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [shuffledAnswers, setShuffled] = useState<Answer[]>([]);

  function handleAnswerClick(answer: Answer) {
    setSelectedAnswer(answer);
  }

  function handleNextClick() {
    setSelectedAnswer(null);
    setCurrentIndex(currentIndex + 1);
  }

  function handlePrevClick() {
    setSelectedAnswer(null);
    setCurrentIndex(currentIndex - 1);
  }

  useEffect(() => {
    setCurrentQuestion(questions[currentIndex]);
  }, [currentIndex, questions]);

  useEffect(() => {
    if (currentQuestion) {
      const answers = currentQuestion.answers;
      let shuffled = [...answers];
      for (let i = answers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffled(shuffled);
    }
  }, [currentQuestion]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [questions]);

  return (
    <div>
      {currentQuestion && (
        <div>
          {currentQuestion.tense}, {currentQuestion.regularity},{" "}
          {currentQuestion.verbType} verb
          <HintButton hint={currentQuestion.translation} />
        </div>
      )}
      <div className="font-bold text-lg mb-4 mt-4">{currentQuestion?.text}</div>

      <div className="space-y-2">
        {shuffledAnswers.map((answer: Answer) => (
          <button
            key={answer.id}
            className={`border px-4 py-2 w-full 
              ${
                selectedAnswer?.id === answer.id && answer.isCorrect
                  ? "border-green-500 bg-green-100 text-green-800"
                  : selectedAnswer?.id === answer.id
                  ? "border-red-500 bg-red-100 text-red-800"
                  : ""
              }`}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer.text}
          </button>
        ))}

        <footer className=" bottom-0 left-0 right-0 bg-white p-4">
          {
            <div className="mx-auto flex justify-between">
              {currentIndex !== 0 && (
                <button
                  className="bg-blue-500  hover:bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={handlePrevClick}
                >
                  Previous Question
                </button>
              )}
              <button
                className="bg-blue-500  hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleNextClick}
                disabled={
                  !selectedAnswer ||
                  !currentQuestion?.answers.find(
                    (a) => a.id === selectedAnswer?.id && a.isCorrect
                  ) ||
                  currentIndex === questions.length - 1
                }
              >
                Next Question
              </button>
            </div>
          }
        </footer>
      </div>
    </div>
  );
};

export default Quiz;
