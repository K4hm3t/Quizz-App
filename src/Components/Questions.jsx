//component containg questions and answers
import React from "react";

export default function Questions(props) {
    return(
        <section>
            {props.questions.map((question, index) => (
                <div key={index} className='questionCard'>
                    <h3>Question #{index + 1}</h3>
                    <h4 dangerouslySetInnerHTML={{ __html: question.question }}></h4>
                    {question.answers.map((answer, answerIndex) => (
                        <div key={answerIndex} className="answers">
                            <label >
                                <input
                                    type="radio"
                                    value={answer}
                                    checked={props.selectedAnswers[index] === answer}
                                    onChange={() => props.handleAnswerSelect(index, answer)}
                                />
                                {answer}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    )
}