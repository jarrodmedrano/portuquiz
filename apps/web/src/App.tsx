import React from 'react';
import './App.css';
import Quiz, { Answer } from './Quiz';

export interface Question {
  text: string;
  translation: string;
  answers: Answer[];
}

function App() {
  const questions: Question[] = [
    {
      text: 'Eu ______ um livro.',
      translation: 'I __read__ a book.',
      answers: [
        { id: 'a1', text: 'leio', isCorrect: true },
        { id: 'a2', text: 'leias', isCorrect: false },
        { id: 'a3', text: 'leiamos', isCorrect: false },
        { id: 'a4', text: 'leiam', isCorrect: false },
      ],
    },
    {
      text: 'Eles ______ futebol todos os domingos.',
      translation: 'They __play__ soccer every Sunday.',
      answers: [
        { id: 'a1', text: 'jogam', isCorrect: true },
        { id: 'a2', text: 'jogo', isCorrect: false },
        { id: 'a3', text: 'jogas', isCorrect: false },
        { id: 'a4', text: 'jogamos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ na escola.',
      translation: 'We __study__ at school.',
      answers: [
        { id: 'a1', text: 'estudamos', isCorrect: true },
        { id: 'a2', text: 'estuda', isCorrect: false },
        { id: 'a3', text: 'estudas', isCorrect: false },
        { id: 'a4', text: 'estudam', isCorrect: false },
      ],
    },
    {
      text: 'Ele ______ muito rápido.',
      translation: 'He __runs__ very fast.',
      answers: [
        { id: 'a1', text: 'corre', isCorrect: true },
        { id: 'a2', text: 'corres', isCorrect: false },
        { id: 'a3', text: 'corremos', isCorrect: false },
        { id: 'a4', text: 'correm', isCorrect: false },
      ],
    },
    {
      text: 'Ela ______ bem.',
      translation: 'She __sings__ well.',
      answers: [
        { id: 'a1', text: 'canta', isCorrect: true },
        { id: 'a2', text: 'cantas', isCorrect: false },
        { id: 'a3', text: 'cantamos', isCorrect: false },
        { id: 'a4', text: 'cantam', isCorrect: false },
      ],
    },
    {
      text: 'Eles ______ a verdade.',
      translation: 'They __know__ the truth.',
      answers: [
        { id: 'a1', text: 'sabem', isCorrect: true },
        { id: 'a2', text: 'sei', isCorrect: false },
        { id: 'a3', text: 'sabes', isCorrect: false },
        { id: 'a4', text: 'sabemos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ o carro.',
      translation: 'We __drive__ the car.',
      answers: [
        { id: 'a1', text: 'dirigimos', isCorrect: true },
        { id: 'a2', text: 'dirige', isCorrect: false },
        { id: 'a3', text: 'diriges', isCorrect: false },
        { id: 'a4', text: 'dirigem', isCorrect: false },
      ],
    },
    {
      text: 'Elas ______ frutas.',
      translation: 'They __eat__ fruits.',
      answers: [
        { id: 'a1', text: 'comem', isCorrect: true },
        { id: 'a2', text: 'como', isCorrect: false },
        { id: 'a3', text: 'comes', isCorrect: false },
        { id: 'a4', text: 'comemos', isCorrect: false },
      ],
    },
    {
      text: 'Tu ______ meu amigo.',
      translation: 'You __are__ my friend.',
      answers: [
        { id: 'a1', text: 'és', isCorrect: true },
        { id: 'a2', text: 'estou', isCorrect: false },
        { id: 'a3', text: 'estás', isCorrect: false },
        { id: 'a4', text: 'estamos', isCorrect: false },
      ],
    },
    {
      text: 'Elas ______ cedo.',
      translation: 'They __will sleep__ early.',
      answers: [
        { id: 'a1', text: 'dormirão', isCorrect: true },
        { id: 'a2', text: 'durmo', isCorrect: false },
        { id: 'a3', text: 'dormes', isCorrect: false },
        { id: 'a4', text: 'dormimos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ ajudar.',
      translation: 'We __can__ help.',
      answers: [
        { id: 'a1', text: 'podemos', isCorrect: true },
        { id: 'a2', text: 'posso', isCorrect: false },
        { id: 'a3', text: 'podes', isCorrect: false },
        { id: 'a4', text: 'podem', isCorrect: false },
      ],
    },
    {
      text: 'Ela ______ um acidente.',
      translation: 'She __saw__ an accident.',
      answers: [
        { id: 'a1', text: 'viu', isCorrect: true },
        { id: 'a2', text: 'vejo', isCorrect: false },
        { id: 'a3', text: 'vês', isCorrect: false },
        { id: 'a4', text: 'vemos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ o trabalho.',
      translation: 'We __did__ the work.',
      answers: [
        { id: 'a1', text: 'fizemos', isCorrect: true },
        { id: 'a2', text: 'faço', isCorrect: false },
        { id: 'a3', text: 'fazes', isCorrect: false },
        { id: 'a4', text: 'fazem', isCorrect: false },
      ],
    },
    {
      text: 'Eles ______ sair.',
      translation: 'They __want__ to leave.',
      answers: [
        { id: 'a1', text: 'querem', isCorrect: true },
        { id: 'a2', text: 'quero', isCorrect: false },
        { id: 'a3', text: 'queres', isCorrect: false },
        { id: 'a4', text: 'queremos', isCorrect: false },
      ],
    },
    {
      text: 'Tu ______ me ajudar.',
      translation: 'You __can__ help me.',
      answers: [
        { id: 'a1', text: 'podes', isCorrect: true },
        { id: 'a2', text: 'posso', isCorrect: false },
        { id: 'a3', text: 'podemos', isCorrect: false },
        { id: 'a4', text: 'podem', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ fome.',
      translation: 'We __are__ hungry.',
      answers: [
        { id: 'a1', text: 'temos', isCorrect: true },
        { id: 'a2', text: 'tenho', isCorrect: false },
        { id: 'a3', text: 'tens', isCorrect: false },
        { id: 'a4', text: 'têm', isCorrect: false },
      ],
    },
    {
      text: 'Eles ______ muito.',
      translation: 'They __laugh__ a lot.',
      answers: [
        { id: 'a1', text: 'riem', isCorrect: true },
        { id: 'a2', text: 'rio', isCorrect: false },
        { id: 'a3', text: 'ris', isCorrect: false },
        { id: 'a4', text: 'rimos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ televisão.',
      translation: 'We __watch__ television.',
      answers: [
        { id: 'a1', text: 'assistimos', isCorrect: true },
        { id: 'a2', text: 'assisto', isCorrect: false },
        { id: 'a3', text: 'assistes', isCorrect: false },
        { id: 'a4', text: 'assistem', isCorrect: false },
      ],
    },
    {
      text: 'Elas ______ comidas deliciosas.',
      translation: 'They __make__ delicious foods.',
      answers: [
        { id: 'a1', text: 'fazem', isCorrect: true },
        { id: 'a2', text: 'faço', isCorrect: false },
        { id: 'a3', text: 'fazes', isCorrect: false },
        { id: 'a4', text: 'fazemos', isCorrect: false },
      ],
    },
    {
      text: 'Elas ______ comidas deliciosas.',
      translation: 'They **made** delicious foods.',
      answers: [
        { id: 'a1', text: 'fizeram', isCorrect: true },
        { id: 'a2', text: 'fiz', isCorrect: false },
        { id: 'a3', text: 'fizeste', isCorrect: false },
        { id: 'a4', text: 'fizemos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ a verdade.',
      translation: 'We **told** the truth.',
      answers: [
        { id: 'a1', text: 'dissemos', isCorrect: true },
        { id: 'a2', text: 'disse', isCorrect: false },
        { id: 'a3', text: 'disseste', isCorrect: false },
        { id: 'a4', text: 'disseram', isCorrect: false },
      ],
    },
    {
      text: 'Eles ______ as malas.',
      translation: 'They **packed** the suitcases.',
      answers: [
        { id: 'a1', text: 'arrumaram', isCorrect: true },
        { id: 'a2', text: 'arrumei', isCorrect: false },
        { id: 'a3', text: 'arrumaste', isCorrect: false },
        { id: 'a4', text: 'arrumámos', isCorrect: false },
      ],
    },
    {
      text: 'Tu ______ o avião.',
      translation: 'You **caught** the plane.',
      answers: [
        { id: 'a1', text: 'apanhaste', isCorrect: true },
        { id: 'a2', text: 'apanhei', isCorrect: false },
        { id: 'a3', text: 'apanhámos', isCorrect: false },
        { id: 'a4', text: 'apanharam', isCorrect: false },
      ],
    },
    {
      text: 'Ela ______ o bolo.',
      translation: 'She **baked** the cake.',
      answers: [
        { id: 'a1', text: 'cozeu', isCorrect: true },
        { id: 'a2', text: 'cozi', isCorrect: false },
        { id: 'a3', text: 'cozeste', isCorrect: false },
        { id: 'a4', text: 'cozemos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ dinheiro.',
      translation: 'We **saved** money.',
      answers: [
        { id: 'a1', text: 'poupámos', isCorrect: true },
        { id: 'a2', text: 'poupei', isCorrect: false },
        { id: 'a3', text: 'poupaste', isCorrect: false },
        { id: 'a4', text: 'pouparam', isCorrect: false },
      ],
    },
    {
      text: 'Eles ______ o problema.',
      translation: 'They **solved** the problem.',
      answers: [
        { id: 'a1', text: 'resolveram', isCorrect: true },
        { id: 'a2', text: 'resolvi', isCorrect: false },
        { id: 'a3', text: 'resolveste', isCorrect: false },
        { id: 'a4', text: 'resolvemos', isCorrect: false },
      ],
    },
    {
      text: 'Eu ______ o livro.',
      translation: 'I **read** the book.',
      answers: [
        { id: 'a1', text: 'li', isCorrect: true },
        { id: 'a2', text: 'leste', isCorrect: false },
        { id: 'a3', text: 'leu', isCorrect: false },
        { id: 'a4', text: 'lemos', isCorrect: false },
      ],
    },
    {
      text: 'Tu ______ televisão.',
      translation: 'You **watched** television.',
      answers: [
        { id: 'a1', text: 'viste', isCorrect: true },
        { id: 'a2', text: 'vi', isCorrect: false },
        { id: 'a3', text: 'vemos', isCorrect: false },
        { id: 'a4', text: 'viram', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ as notícias.',
      translation: 'We **read** the news.',
      answers: [
        { id: 'a1', text: 'lemos', isCorrect: true },
        { id: 'a2', text: 'li', isCorrect: false },
        { id: 'a3', text: 'leste', isCorrect: false },
        { id: 'a4', text: 'leram', isCorrect: false },
      ],
    },
    {
      text: 'Você ______ muito.',
      translation: 'You **laughed** a lot.',
      answers: [
        { id: 'a1', text: 'riu', isCorrect: true },
        { id: 'a2', text: 'riste', isCorrect: false },
        { id: 'a3', text: 'riram', isCorrect: false },
        { id: 'a4', text: 'rimos', isCorrect: false },
      ],
    },
    {
      text: 'Elas ______ adormecer.',
      translation: 'They **fell** asleep.',
      answers: [
        { id: 'a1', text: 'adormeceram', isCorrect: true },
        { id: 'a2', text: 'adormeci', isCorrect: false },
        { id: 'a3', text: 'adormeceste', isCorrect: false },
        { id: 'a4', text: 'adormecemos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ todas perguntas.',
      translation: 'We **answered** all questions.',
      answers: [
        { id: 'a1', text: 'respondemos', isCorrect: true },
        { id: 'a2', text: 'respondi', isCorrect: false },
        { id: 'a3', text: 'respondeste', isCorrect: false },
        { id: 'a4', text: 'respondeu', isCorrect: false },
      ],
    },
    {
      text: 'Eles ______ o jogo.',
      translation: 'They **won** the game.',
      answers: [
        { id: 'a1', text: 'ganharam', isCorrect: true },
        { id: 'a2', text: 'ganhei', isCorrect: false },
        { id: 'a3', text: 'ganhaste', isCorrect: false },
        { id: 'a4', text: 'ganhámos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ a verdade.',
      translation: 'We **will tell** the truth.',
      answers: [
        { id: 'a1', text: 'diremos', isCorrect: true },
        { id: 'a2', text: 'direi', isCorrect: false },
        { id: 'a3', text: 'dirás', isCorrect: false },
        { id: 'a4', text: 'dirão', isCorrect: false },
      ],
    },

    {
      text: 'Eles ______ as malas.',
      translation: 'They **will pack** the suitcases.',
      answers: [
        { id: 'a1', text: 'arrumarão', isCorrect: true },
        { id: 'a2', text: 'arrumarei', isCorrect: false },
        { id: 'a3', text: 'arrumarás', isCorrect: false },
        { id: 'a4', text: 'arrumaremos', isCorrect: false },
      ],
    },

    {
      text: 'Tu ______ o avião.',
      translation: 'You **will catch** the plane.',
      answers: [
        { id: 'a1', text: 'apanharás', isCorrect: true },
        { id: 'a2', text: 'apanharei', isCorrect: false },
        { id: 'a3', text: 'apanharemos', isCorrect: false },
        { id: 'a4', text: 'apanharão', isCorrect: false },
      ],
    },

    {
      text: 'Ela ______ o bolo.',
      translation: 'She **will bake** the cake.',
      answers: [
        { id: 'a1', text: 'cozerá', isCorrect: true },
        { id: 'a2', text: 'cozerei', isCorrect: false },
        { id: 'a3', text: 'cozerás', isCorrect: false },
        { id: 'a4', text: 'cozeremos', isCorrect: false },
      ],
    },

    {
      text: 'Nós ______ dinheiro.',
      translation: 'We **will save** money.',
      answers: [
        { id: 'a1', text: 'pouparemos', isCorrect: true },
        { id: 'a2', text: 'pouparei', isCorrect: false },
        { id: 'a3', text: 'pouparás', isCorrect: false },
        { id: 'a4', text: 'pouparão', isCorrect: false },
      ],
    },

    {
      text: 'Eles ______ o problema.',
      translation: 'They **will solve** the problem.',
      answers: [
        { id: 'a1', text: 'resolverão', isCorrect: true },
        { id: 'a2', text: 'resolverei', isCorrect: false },
        { id: 'a3', text: 'resolverás', isCorrect: false },
        { id: 'a4', text: 'resolveremos', isCorrect: false },
      ],
    },

    {
      text: 'Eu ______ o livro.',
      translation: 'I **will read** the book.',
      answers: [
        { id: 'a1', text: 'lerei', isCorrect: true },
        { id: 'a2', text: 'lerás', isCorrect: false },
        { id: 'a3', text: 'lerá', isCorrect: false },
        { id: 'a4', text: 'leremos', isCorrect: false },
      ],
    },

    {
      text: 'Tu ______ televisão.',
      translation: 'You **will watch** television.',
      answers: [
        { id: 'a1', text: 'verás', isCorrect: true },
        { id: 'a2', text: 'verei', isCorrect: false },
        { id: 'a3', text: 'veremos', isCorrect: false },
        { id: 'a4', text: 'verão', isCorrect: false },
      ],
    },

    {
      text: 'Nós ______ as notícias.',
      translation: 'We **will read** the news.',
      answers: [
        { id: 'a1', text: 'leremos', isCorrect: true },
        { id: 'a2', text: 'lerei', isCorrect: false },
        { id: 'a3', text: 'lerás', isCorrect: false },
        { id: 'a4', text: 'lerão', isCorrect: false },
      ],
    },

    {
      text: 'Você ______ muito.',
      translation: 'You **will laugh** a lot.',
      answers: [
        { id: 'a1', text: 'rirá', isCorrect: true },
        { id: 'a2', text: 'rirei', isCorrect: false },
        { id: 'a3', text: 'rirás', isCorrect: false },
        { id: 'a4', text: 'riremos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ a verdade.',
      translation: 'We **will tell** the truth.',
      answers: [
        { id: 'a1', text: 'diremos', isCorrect: true },
        { id: 'a2', text: 'direi', isCorrect: false },
        { id: 'a3', text: 'dirás', isCorrect: false },
        { id: 'a4', text: 'dirão', isCorrect: false },
      ],
    },
    {
      text: 'Você ______ muito.',
      translation: 'You **will laugh** a lot.',
      answers: [
        { id: 'a1', text: 'rirá', isCorrect: true },
        { id: 'a2', text: 'rirei', isCorrect: false },
        { id: 'a3', text: 'rirás', isCorrect: false },
        { id: 'a4', text: 'riremos', isCorrect: false },
      ],
    },
    {
      text: 'Eles ______ a festa.',
      translation: 'They **will enjoy** the party.',
      answers: [
        { id: 'a1', text: 'apreciarão', isCorrect: true },
        { id: 'a2', text: 'apreciarei', isCorrect: false },
        { id: 'a3', text: 'apreciarás', isCorrect: false },
        { id: 'a4', text: 'apreciaremos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ sair.',
      translation: 'We **will go out**.',
      answers: [
        { id: 'a1', text: 'sairemos', isCorrect: true },
        { id: 'a2', text: 'sairei', isCorrect: false },
        { id: 'a3', text: 'sairás', isCorrect: false },
        { id: 'a4', text: 'sairão', isCorrect: false },
      ],
    },
    {
      text: 'Eles ______ tudo.',
      translation: 'They **will explain** everything.',
      answers: [
        { id: 'a1', text: 'explicarão', isCorrect: true },
        { id: 'a2', text: 'explicarei', isCorrect: false },
        { id: 'a3', text: 'explicarás', isCorrect: false },
        { id: 'a4', text: 'explicaremos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ calados.',
      translation: 'We **will remain** silent.',
      answers: [
        { id: 'a1', text: 'ficaremos', isCorrect: true },
        { id: 'a2', text: 'ficarei', isCorrect: false },
        { id: 'a3', text: 'ficarás', isCorrect: false },
        { id: 'a4', text: 'ficarão', isCorrect: false },
      ],
    },
    {
      text: 'Elas ______ tudo.',
      translation: 'They **will clean** everything.',
      answers: [
        { id: 'a1', text: 'limparão', isCorrect: true },
        { id: 'a2', text: 'limparei', isCorrect: false },
        { id: 'a3', text: 'limparás', isCorrect: false },
        { id: 'a4', text: 'limparemos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ cedo.',
      translation: 'We **will arrive** early.',
      answers: [
        { id: 'a1', text: 'chegaremos', isCorrect: true },
        { id: 'a2', text: 'chegarei', isCorrect: false },
        { id: 'a3', text: 'chegarás', isCorrect: false },
        { id: 'a4', text: 'chegarão', isCorrect: false },
      ],
    },
    {
      text: 'Eles ______ a lição.',
      translation: 'They **will learn** the lesson.',
      answers: [
        { id: 'a1', text: 'aprenderão', isCorrect: true },
        { id: 'a2', text: 'aprenderei', isCorrect: false },
        { id: 'a3', text: 'aprenderás', isCorrect: false },
        { id: 'a4', text: 'aprenderemos', isCorrect: false },
      ],
    },
    {
      text: 'Nós ______ tudo.',
      translation: 'We **will buy** everything.',
      answers: [
        { id: 'a1', text: 'compraremos', isCorrect: true },
        { id: 'a2', text: 'comprarei', isCorrect: false },
        { id: 'a3', text: 'comprarás', isCorrect: false },
        { id: 'a4', text: 'comprarão', isCorrect: false },
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
