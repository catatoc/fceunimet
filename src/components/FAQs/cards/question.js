import React from "react";
import './question.css';
import { FaQuestionCircle } from 'react-icons/fa';
// import questionList from "../questionList";
// import individualCard from "./card"
import { questionList } from "../../../lib/questionList";

export default function Card() {
  return(
    <>
      <div>
      {questionList.map((question, i) => (
        <div className="questioncard" key={i}>
          <div className="questioncard-text">
            <FaQuestionCircle size='1.5rem'/>
            <p className="questioncard-name">{question.question}</p>
          </div>
          <hr></hr>
          <div className="questioncard-description">
            <p className="questioncard-text">{question.answer}</p>
          </div>
        </div>
        ))}
      </div>
    </>
    

  )
}


