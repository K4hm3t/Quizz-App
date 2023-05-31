import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingDots from './Components/LoadingDots';
import Start from "./Components/Start"
import Questions from './Components/Questions';
import ShuffleArray from "./ShuffleArray.js";
import Result from './Components/Result';

export default function App() {
//states
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);


  //useEffect for API
  useEffect(() => {
    if (quizStarted) {
      fetchQuestions();
    }
  }, [quizStarted]);


//function that fetches API
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10"
      );
      //cleaner way to pull data from an array
      const formattedQuestions = response.data.results.map((question) => ({
        ...question,
        answers: ShuffleArray([question.correct_answer, ...question.incorrect_answers]),
      }));
      setQuestions(formattedQuestions);
      setSelectedAnswers(new Array(formattedQuestions.length).fill(''));
    } catch (error) {
      console.warn(error);
    }
  };


//button that generates questions
  function playTheGame() {
    setQuizStarted(true)
  };


//function that allows selecting answer
  function handleAnswerSelect(index, answer) {
    setSelectedAnswers((prevAnswer) => {
      const updatedAnswer = [...prevAnswer];
      updatedAnswer[index] = answer;
      return updatedAnswer;
    });
  };


// button that submits answers that were picked
  function handleQuizSubmit() {
    setShowResult(true);
  }


//button that starts the quiz again (resets states)
  function playAgain() {
    setQuizStarted(false);
    setSelectedAnswers([]);
    setShowResult(false);
    setQuestions([]);
  }

  
//variable that's used for checking if all answers to questions are selected
  const areAllAnswersSelected = selectedAnswers.every((answer) => answer !== '');


//calculation of of correct answers, based on result of calculation certain message is printed
  const correctAnswers = questions.filter((question, index) => question.correct_answer === selectedAnswers[index]);
  const numCorrectAnswers = correctAnswers.length;

    let resultMessage = "";
    if (numCorrectAnswers === 0) {
      resultMessage = "Uh oh, you didn't guess anything";
    } else if (numCorrectAnswers >= 1 && numCorrectAnswers <= 5) {
      resultMessage = "Not bad, but it can be better";
    } else if (numCorrectAnswers >= 6 && numCorrectAnswers <= 9) {
      resultMessage = "Nice, you almost guessed them all";
    } else if (numCorrectAnswers === 10) {
      resultMessage = "Wow, you got them all right, congratulations!";
    };



//if conditional that allows rendering start screen first
  if(!quizStarted){
    return (
      <Start playTheGame={playTheGame}/>
    )
  };


//loading screen that shows until data from API is rendered
  if(questions.length === 0) {
    return(
      <div className='loading'>
        <h1>Loading</h1>
        <LoadingDots />
      </div>
    )
  };


//Result screen render, when answers are submited
  if(showResult) {
    return (
      <Result
        numCorrectAnswers={numCorrectAnswers}
        totalQuestions={questions.length}
        resultMessage={resultMessage}
        playAgain={playAgain}
      />
    );
  };


//rendering quiz questions and answers
  return(
    <main className="questions-container">
      <Questions
        questions={questions}
        selectedAnswers={selectedAnswers}
        handleAnswerSelect={handleAnswerSelect}
      />
      {questions.length > 0 &&
        <button
        className='submitButton'
        onClick={handleQuizSubmit}
        disabled={!areAllAnswersSelected}>
        Submit Answers
      </button>
      }
    </main>
  )
};
