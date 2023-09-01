import React, { useState } from "react";
import "./App.css";
import Quiz, { Answer } from "./Quiz";
import Navbar from "./Navbar";
import questions from "./questions.json";

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

  const handleNavClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);

    switch (value) {
      case "shuffle":
        const shuffledQuestions = quizQuestions?.sort(
          () => 0.5 - Math.random()
        );
        setQuizQuestions(shuffledQuestions);
        break;
      case "ar":
        const arQuestions = quizQuestions.filter((q) => q.verbType === "ar");
        setQuizQuestions(arQuestions);
        break;
      case "ir":
        const irQuestions = quizQuestions.filter((q) => q.verbType === "ir");
        setQuizQuestions(irQuestions);
        break;
      case "er":
        const erQuestions = quizQuestions.filter((q) => q.verbType === "er");
        setQuizQuestions(erQuestions);
        break;
      case "presente":
        const presenteQuestions = quizQuestions.filter(
          (q) => q.tense === "presente"
        );
        setQuizQuestions(presenteQuestions);
        break;
      case "perterito-perfeito":
        const ppQuestions = quizQuestions.filter(
          (q) => q.tense === "preterito-perfeito"
        );
        setQuizQuestions(ppQuestions);
        break;
      case "perfeito":
        const pQuestions = quizQuestions.filter((q) => q.tense === "perfeito");
        setQuizQuestions(pQuestions);
        break;
      case "futuro-do-presente":
        const fpQuestions = quizQuestions.filter(
          (q) => q.tense === "futuro-do-presente"
        );
        setQuizQuestions(fpQuestions);
        break;
      case "preterito-imperfeito":
        const piQuestions = quizQuestions.filter(
          (q) => q.tense === "preterito-imperfeito"
        );
        setQuizQuestions(piQuestions);
        break;
      default:
        setQuizQuestions(questionz);
        break;
    }

    if (value === "shuffle") {
      //shuffle all questions randomly
      const shuffledQuestions = quizQuestions?.sort(() => 0.5 - Math.random());
      setQuizQuestions(shuffledQuestions);
    }
  };

  return (
    <>
      <Navbar handleClick={handleNavClick} />
      <div className="flex h-screen">
        <div className="m-auto max-w-md text-center rounded border px-10 py-10 w-full">
          <h1 className="text-3xl font-bold underline">PortuQuiz</h1>
          <Quiz questions={quizQuestions} />
        </div>
      </div>
    </>
  );
}

export default App;
