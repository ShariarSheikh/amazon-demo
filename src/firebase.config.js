import firebase from "firebase/app";
import "firebase/auth";

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STOREGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const config = {
  apiKey: "AIzaSyCxMILGEg0qgAhwcDbtdTgYIiphez5_zTY",
  authDomain: "ecommerce-138ad.firebaseapp.com",
  projectId: "ecommerce-138ad",
  storageBucket: "ecommerce-138ad.appspot.com",
  messagingSenderId: "609957822382",
  appId: "1:609957822382:web:b904208ce7160918d5123f",
};

const firebaseApp = firebase.initializeApp(config);
const fireAuth = firebase.auth();

export { firebaseApp, fireAuth };
