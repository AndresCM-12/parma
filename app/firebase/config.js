import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHeeDLBBTUGi7PMbyP7zGk2bmPotGLEeo",
  authDomain: "parma-user-questions.firebaseapp.com",
  projectId: "parma-user-questions",
  storageBucket: "parma-user-questions.appspot.com",
  messagingSenderId: "374753804241",
  appId: "1:374753804241:web:ef5fafe8149538e1326af0",
};

//For server side
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
