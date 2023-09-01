import React, { useEffect, useState } from "react";
import "./App.css";
import Quiz, { Answer } from "./Quiz";
import Navbar from "./Navbar";
import questions from "./questions.json";
import Loader from "./Loader";

export interface Question {
  text: string;
  translation: string;
  answers: Answer[];
  tense: string;
  regularity: string;
  verbType: string;
}

function App() {
  const questionz: Question[] = questions.questions;
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(questionz);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setIsLoading(true);

    switch (value) {
      case "shuffle":
        console.log(value);
        let shuffled = [...questionz];
        for (let i = questionz.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setQuizQuestions(shuffled);
        break;
      case "ar":
        console.log(value);
        const arQuestions = questionz.filter((q) => q.verbType === "ar");
        setQuizQuestions(arQuestions);
        break;
      case "ir":
        console.log(value);
        const irQuestions = questionz.filter((q) => q.verbType === "ir");
        setQuizQuestions(irQuestions);
        break;
      case "er":
        console.log(value);
        const erQuestions = questionz.filter((q) => q.verbType === "er");
        setQuizQuestions(erQuestions);
        break;
      case "presente":
        console.log(value);
        const presenteQuestions = questionz.filter(
          (q) => q.tense === "presente"
        );
        setQuizQuestions(presenteQuestions);
        break;
      case "preterito-perfeito":
        console.log(value);
        const ppQuestions = questionz.filter(
          (q) => q.tense === "preterito-perfeito"
        );
        setQuizQuestions(ppQuestions);
        break;
      case "perfeito":
        console.log(value);
        const pQuestions = questionz.filter((q) => q.tense === "perfeito");
        setQuizQuestions(pQuestions);
        break;
      case "futuro-do-presente":
        console.log(value);
        const fpQuestions = questionz.filter(
          (q) => q.tense === "futuro-do-presente"
        );
        console.log("fp", fpQuestions);
        setQuizQuestions(fpQuestions);
        break;
      case "preterito-imperfeito":
        console.log(value);
        const piQuestions = questionz.filter(
          (q) => q.tense === "preterito-imperfeito"
        );
        setQuizQuestions(piQuestions);
        break;
      case "regular":
        console.log(value);
        const regQuestions = questionz.filter(
          (q) => q.regularity === "regular"
        );
        setQuizQuestions(regQuestions);
        break;
      case "irregular":
        console.log(value);
        const irregQuestions = questionz.filter(
          (q) => q.regularity === "irregular"
        );
        setQuizQuestions(irregQuestions);
        break;
      default:
        console.log(value);
        setQuizQuestions(questionz);
        break;
    }
  };

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [quizQuestions, isLoading]);

  return (
    <>
      <Navbar handleClick={handleNavClick} />
      <div className="flex h-screen">
        <div className="m-auto max-w-md text-center rounded border px-10 py-10 w-full">
          <h1 className="text-3xl font-bold underline">PortuQuiz</h1>
          {isLoading ? <Loader /> : <Quiz questions={quizQuestions} />}
        </div>
      </div>
    </>
  );
}

export default App;
