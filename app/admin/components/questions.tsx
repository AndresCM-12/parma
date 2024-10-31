import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  FirestoreError,
  collection,
  doc,
  getFirestore,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { app } from "../../firebase/config";
import { OrbitProgress } from "react-loading-indicators";
import {
  Edit2Icon,
  Eye,
  EyeClosed,
  MessageSquareMore,
  Trash2,
  X,
} from "lucide-react";

export default function AdminQuestions() {
  const [status, setStatus] = useState("initial");
  const [questions, setQuestions] = useState([] as any);

  const [snapshot, loading, error] = useCollection(
    query(
      collection(getFirestore(app), "user-questions"),
      orderBy("date", "desc")
    )
  );

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
        setQuestions((prev: any) => [...prev, { ...doc.data(), id: doc.id }]);
      });
      setStatus("success");
    }
  }, [snapshot]);

  switch (status) {
    case "initial":
      return <InitialView />;

    case "loading":
      return <LoadingView />;

    case "success":
      return <SuccessView questions={questions} />;

    default:
      return <ErrorView error={error} />;
  }
}

function InitialView() {
  return (
    <div className={styles.questionsWrapper}>
      <OrbitProgress color="#000000" size="medium" text="" textColor="" />
    </div>
  );
}

function LoadingView() {
  return (
    <div className={styles.questionsWrapper}>
      <OrbitProgress color="#000000" size="medium" text="" textColor="" />
    </div>
  );
}

function SuccessView({ questions }: { questions: any }) {
  return (
    <div className={styles.questionsWrapper}>
      <div className={styles.successWrapper}>
        {questions.map((question: any) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

function ErrorView({ error }: { error: FirestoreError | undefined }) {
  return (
    <div className={styles.questionsWrapper}>
      <h1>Ocurrió un error</h1>
      <p>{error?.code}</p>
      <p>{error?.message}</p>
    </div>
  );
}

function QuestionItem({ question }: { question: any }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(question.visible);
  const [showResponses, setShowResponses] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [showEditText, setShowEditText] = useState(false);
  const [editText, setEditText] = useState(question.question);

  var responses = question.responses;

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    responses.push(responseText);

    const ref = doc(getFirestore(app), "user-questions", question.id);
    try {
      await updateDoc(ref, {
        responses: responses,
      });

      setResponseText("");
    } catch (error) {
      console.error("Error al enviar respuesta", error);
    }
  };

  const handleDelete = async (index: number) => {
    responses.splice(index, 1);

    const ref = doc(getFirestore(app), "user-questions", question.id);
    await updateDoc(ref, {
      responses: responses,
    });
  };

  const handleVisibility = async () => {
    const ref = doc(getFirestore(app), "user-questions", question.id);
    await updateDoc(ref, {
      visible: !isAnswerVisible,
    });

    setIsAnswerVisible(!isAnswerVisible);
  };

  const handleEditQuestion = async (event: any) => {
    event.preventDefault();

    const ref = doc(getFirestore(app), "user-questions", question.id);
    await updateDoc(ref, {
      question: editText,
    });

    setShowEditText(false);
  };

  return (
    <div className={styles.questionWrapper}>
      <div key={question.id} className={styles.questionCard}>
        <div className={styles.textWrapper}>
          {isAnswerVisible ? (
            <Eye
              size={24}
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleVisibility()}
            />
          ) : (
            <EyeClosed
              size={24}
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleVisibility()}
            />
          )}
          {showEditText ? (
            <div className={styles.editUserQuestion}>
              <input
                type="text"
                value={editText}
                onChange={(event) => setEditText(event.target.value)}
                className={styles.input}
              />
              <button
                onClick={(evnet) => handleEditQuestion(event)}
                className={styles.actionButton}
              >
                Editar
              </button>
              <X size={24} onClick={() => setShowEditText(false)} />
            </div>
          ) : (
            <div className={styles.editTextQuestion}>
              <div className={styles.text}>
                <p>{editText} </p>
              </div>
              <Edit2Icon size={18} onClick={() => setShowEditText(true)} />
            </div>
          )}
        </div>

        {!showEditText && (
          <div
            className={styles.iconWrapper}
            onClick={() => {
              setShowResponses(!showResponses);
            }}
          >
            <p>{question.responses.length}</p>
            <MessageSquareMore size={24} />
            <span>
              {new Date(question.date.seconds * 1000).toLocaleDateString()}
            </span>
          </div>
        )}
      </div>
      {showResponses && (
        <div className={styles.questionAnswers}>
          <form>
            <input
              type="text"
              value={responseText}
              onChange={(event) => setResponseText(event.target.value)}
              className={styles.input}
            />
            <button
              onClick={(event) => handleSubmit(event)}
              className={styles.actionButton}
            >
              Responder
            </button>
          </form>
          <div className={styles.wrapQuestions}>
            {responses.map((text: any, index: number) => (
              <div key={index} className={styles.responseCard}>
                <p>{text}</p>
                <Trash2
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(index)}
                  size={24}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
