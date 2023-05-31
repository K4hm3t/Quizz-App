//component that contains user's result with button that allows to play again
import React from "react";

export default function Result (props) {

    return (
    <div className="result">
      <h1>Quiz Result</h1>
      <p>
        You answered {props.numCorrectAnswers} / {props.totalQuestions} correctly.
      </p>
      <p>{props.resultMessage}</p>
      <button className="playAgain" onClick={props.playAgain}>Play Again</button>
    </div>
    )
}