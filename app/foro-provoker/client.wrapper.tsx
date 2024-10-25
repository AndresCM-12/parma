"use client";

import { useState } from "react";
import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import CustomFooter from "../components/footer/custom-footer";
import foroCover from "../../public/images/foro-cover.png";
import blackTrail from "../../public/images/trail_black.svg";
import searchIcon from "../../public/images/search-icon.svg";
import rightArrow from "../../public/images/long-right-arrow.svg";
import bottomArrow from "../../public/images/white-bottom-arrow.svg";

export default function ForoProvokerClientWrapper({
  faqQuestions,
  userQuestions,
}: {
  faqQuestions: any;
  userQuestions: any;
}) {
  const [filtredQuestions, setFiltredQuestions] = useState(null as any);

  const searchForQuestion = (title: string) => {
    const result = userQuestions.filter((question: any) =>
      question.question.toLowerCase().includes(title.toLowerCase())
    );
    return result;
  };

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.coverImage}>
          <img src={foroCover.src} alt="Imagen de fondo del foro provoker" />
          <h1>FORO PROVOKER</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>

        <div className={styles.headerWrapper}>
          <h2>PREGUNTAS FRECUENTES</h2>
          <img src={blackTrail.src} alt="Decorador de titulos parma" />
        </div>

        <div className={styles.questionsWrapper}>
          <div className={styles.searchBar}>
            <div className={styles.iconWrapper}>
              <img src={searchIcon.src} alt="Ícono de buesqueda" />
            </div>
            <input
              type="text"
              placeholder="Buscar pregunta"
              onChange={(event) => {
                const result = searchForQuestion(event.target.value);
                setFiltredQuestions(result);

                if (event.target.value === "" || event.target.value === " ") {
                  setFiltredQuestions(null);
                }
              }}
            />
          </div>

          {filtredQuestions != null
            ? filtredQuestions.map((question: any, index: number) => (
                <Comment question={question} key={index} />
              ))
            : faqQuestions.map((question: any, index: number) => (
                <Comment question={question} key={index} />
              ))}

          <div className={styles.createQuestionWrapper}>
            <h6>PREGUNTAR</h6>
            <textarea
              name="question"
              id="question"
              placeholder="Escribe tu pregunta aquí"
            ></textarea>
            <button>ENVIAR</button>
          </div>
        </div>
      </main>
      <CustomFooter />
    </>
  );
}

function Comment({
  question,
}: {
  question: {
    id: number;
    question: string;
    likes: number;
    response: String[];
  };
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={styles.questionWrapper} style={{}}>
      <div className={styles.title} onClick={() => setShowAnswer(!showAnswer)}>
        <h3>{question.question}</h3>
        <img
          className={styles.headerArrow}
          src={rightArrow.src}
          width={50}
          height={10}
          alt=""
          style={{
            display: showAnswer ? "none" : "block",
          }}
        />
      </div>
      <div
        className={styles.body}
        style={{
          display: showAnswer ? "flex" : "none",
          height: showAnswer ? "auto" : "0px",
        }}
      >
        <img
          src={bottomArrow.src}
          alt="Flecha apuntando a abajo"
          onClick={() => setShowAnswer(false)}
        />
        {question?.response.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
}
