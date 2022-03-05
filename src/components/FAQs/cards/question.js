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
            <div className="questioncard-qtitle">
              <FaQuestionCircle size='1.5rem'/>
              <p className="questioncard-name">{question.question}</p>
            </div>
            <div className="questioncard-etiquetas">
              <p className="questioncard-etiqueta1">{question.etiqueta1}</p>
              <p className="questioncard-etiqueta2">{question.etiqueta2}</p>
              <p className="questioncard-etiqueta3">{question.etiqueta3}</p>
              <p className="questioncard-etiqueta3">{question.etiqueta4}</p>
            </div>
          </div>
          <hr/>
          <div className="questioncard-description">
            <p className="questioncard-text">{question.answer}</p>
          </div>
          {/* Ver si poner botones en los anchors */}
          <div className="questioncard-description-links">
            <a href={question.href} target="_blank" className="questioncard-text">{question.usefulLink}</a>
            <a href={question.href2} target="_blank" className="questioncard-text">{question.usefulLink2}</a>
          </div>
        </div>
        ))}
      </div>
    </>
    

  )
}


