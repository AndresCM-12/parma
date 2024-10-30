"use client";

import { useEffect, useState } from "react";
import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import CustomFooter from "../components/footer/custom-footer";
import foroCover from "../../public/images/foro-cover.png";
import blackTrail from "../../public/images/trail_black.svg";
import searchIcon from "../../public/images/search-icon.svg";
import rightArrow from "../../public/images/long-right-arrow.svg";
import bottomArrow from "../../public/images/white-bottom-arrow.svg";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import { app } from "../firebase/config";
import {
  collection,
  getFirestore,
  setDoc,
  FirestoreError,
  doc,
  query,
  queryEqual,
  where,
} from "firebase/firestore";
import commentIcon from "../../public/images/comment-icon.svg";
import Snackbar from "@mui/material/Snackbar";

export default function ForoProvokerClientWrapper({
  faqQuestions,
}: {
  faqQuestions: any;
}) {
  const [filtredQuestions, setFiltredQuestions] = useState(null as any);

  const searchForQuestion = (title: string) => {
    const result = faqQuestions.filter((question: any) =>
      question.question.toLowerCase().includes(title.toLowerCase())
    );
    return result;
  };

  const [status, setStatus] = useState("initial");
  //Only visible questions
  const [snapshot, loading, error] = useCollectionOnce(
    query(
      collection(getFirestore(app), "user-questions"),
      where("visible", "==", true)
    )
  );

  const [questions, setQuestions] = useState([] as any);

  useEffect(() => {
    if (loading) {
      setStatus("loading");
      return;
    }

    if (error) {
      setStatus("error");
      return;
    }

    if (status === "loading" && snapshot != undefined) {
      snapshot.docs.forEach((doc) => {
        setQuestions((prev: any) => [...prev, { ...doc.data() }]);
      });
      setStatus("succsess");
    }
  }, [snapshot]);

  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });

  const [userQuestions, setUserQuestions] = useState("");

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleCreateQuestion = async (event: any) => {
    if (userQuestions === "" || userQuestions === " ") {
      return;
    }

    try {
      event.preventDefault();
      const docRef = doc(collection(getFirestore(app), "user-questions"));

      await setDoc(docRef, {
        question: userQuestions,
        responses: [],
        date: new Date(),
        visible: false,
      });

      setUserQuestions("");
      setState({
        open: true,
        vertical: "bottom",
        horizontal: "right",
      });
    } catch (error) {
      const errorCode = (error as FirestoreError).code;
      console.log(errorCode);
    }
  };

  return (
    <>
      <CustomHeader />
      <Snackbar
        autoHideDuration={10000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        message="Tu comentario fue enviado con éxito, espera a que un administrador lo apruebe"
        key={vertical + horizontal}
      />

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
              value={userQuestions}
              onChange={(event) => setUserQuestions(event.target.value)}
              placeholder="Escribe tu pregunta aquí"
            ></textarea>
            <button onClick={(event) => handleCreateQuestion(event)}>
              ENVIAR
            </button>
          </div>

          <div className={styles.userQuestions}>
            <h6>ÚLTIMAS REALIZADAS</h6>
            {questions.map((question: any, index: number) => (
              <div key={index} className={styles.usersQuestionsWrapper}>
                <div className={styles.contentWrapper}>
                  <h3>{question.question}</h3>
                  <div className={styles.commentsWrapper}>
                    {question.responses.map((response: any, index: number) => (
                      <div className={styles.response} key={index}>
                        <h5>Respuesta:</h5>
                        <p key={index}>{response}</p>
                        <h6>@adminparma</h6>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.icons}>
                  <img src={commentIcon.src} alt="Buscar" />
                  <p>{question.responses.length}</p>
                </div>
              </div>
            ))}
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
