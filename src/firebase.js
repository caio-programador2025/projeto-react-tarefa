import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2UgpQllp6TBXEbXxtIderzXCbPJXblDQ",
  authDomain: "projeto-react-tarefa-33aee.firebaseapp.com",
  projectId: "projeto-react-tarefa-33aee",
  storageBucket: "projeto-react-tarefa-33aee.firebasestorage.app",
  messagingSenderId: "883916845580",
  appId: "1:883916845580:web:6f9cd1e531725f846ff429"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export {auth};