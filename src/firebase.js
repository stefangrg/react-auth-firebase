// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMeh_WJmRrFdcbtH7zgd_Xcn2npyNYGNw",
  authDomain: "react-auth-dev-21e1e.firebaseapp.com",
  projectId: "react-auth-dev-21e1e",
  storageBucket: "react-auth-dev-21e1e.appspot.com",
  messagingSenderId: "29831670229",
  appId: "1:29831670229:web:8c4617ec1e3e7e8956b55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
