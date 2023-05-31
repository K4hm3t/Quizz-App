//componet for the quiz opening screen
import React from "react";

export default function Start(props) {
    return(
        <div className="opening">
            <h1 className="headline">Welcome to the Quiz Game!</h1>
            <button 
                className="playButton"
                onClick={props.playTheGame}
                >Play The Quiz
            </button>
        </div>
    )
}