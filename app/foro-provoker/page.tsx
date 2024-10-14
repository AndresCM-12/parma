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

export default function Home() {
  const [faqQuestions, setFaqQuestions] = useState([
    {
      id: 1,
      question: "¿Qué es el Foro Provoker?",
      likes: 10,
      response: [
        "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer!",

        "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer!",

        "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer!",
      ],
    },
    {
      id: 2,
      question: "¿Cómo puedo participar en el Foro Provoker?",
      likes: 8,
      response: [
        "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer!",

        "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer!",

        "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer!",
      ],
    },
    {
      id: 3,
      question: "¿Qué tipo de temas se pueden tratar en el Foro Provoker?",
      adminAnswer:
        "En el Foro Provoker puedes tratar temas relacionados con la marca Provoker, como sus productos, promociones, eventos, etc. También puedes compartir tus experiencias y opiniones sobre la marca.",
      likes: 6,
      response: [
        "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer!",

        "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer!",

        "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer!",
      ],
    },
  ]);

  const [filtredQuestions, setFiltredQuestions] = useState(null as any);

  const [userQuestions, setuserQuestions] = useState([
    {
      id: 1,
      question: "¿Qué es el Foro Provoker?",
      adminAnswer:
        "El Foro Provoker es un espacio de discusión y debate sobre temas relacionados con la marca Provoker. Aquí podrás compartir tus opiniones, preguntas y sugerencias con otros usuarios y con el equipo de Provoker.",
      likes: 10,
      response: [
        {
          id: 1,
          comment:
            "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer! ¡Ya tengo varias preguntas para hacer!",
          likes: 5,
        },
        {
          id: 2,
          comment:
            "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer!",
          likes: 5,
        },
        {
          id: 3,
          comment:
            "Me parece una idea genial. ¡Ya tengo varias preguntas para hacer!",
          likes: 5,
        },
      ],
    },
    {
      id: 2,
      question: "¿Cómo puedo participar en el Foro Provoker?",
      likes: 8,
      response: [
        {
          id: 1,
          comment: "¡Gracias por la información! Ya me he registrado.",
          likes: 3,
        },
        {
          id: 2,
          comment: "¡Gracias por la información! Ya me he registrado.",
          likes: 3,
        },
        {
          id: 3,
          comment: "¡Gracias por la información! Ya me he registrado.",
          likes: 3,
        },
      ],
    },
    {
      id: 3,
      question: "¿Qué tipo de temas se pueden tratar en el Foro Provoker?",
      adminAnswer:
        "En el Foro Provoker puedes tratar temas relacionados con la marca Provoker, como sus productos, promociones, eventos, etc. También puedes compartir tus experiencias y opiniones sobre la marca.",
      likes: 6,
      response: [
        {
          id: 1,
          comment:
            "¡Me encanta la idea! Estoy deseando compartir mis experiencias con la marca.",
          likes: 2,
        },
        {
          id: 2,
          comment:
            "¡Me encanta la idea! Estoy deseando compartir mis experiencias con la marca.",
          likes: 2,
        },
        {
          id: 3,
          comment:
            "¡Me encanta la idea! Estoy deseando compartir mis experiencias con la marca.",
          likes: 2,
        },
      ],
    },
  ]);

  const searchForQuestion = (title: string) => {
    const result = userQuestions.filter((question) =>
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
            : faqQuestions.map((question, index) => (
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
        {question.response.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
}
