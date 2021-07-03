import firebase from "firebase/app";
import "firebase/auth";

// const config = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STOREGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
// };

const config = {
  apiKey: "AIzaSyCxMILGEg0qgAhwcDbtdTgYIiphez5_zTY",
  authDomain: "ecommerce-138ad.firebaseapp.com",
  projectId: "ecommerce-138ad",
  storageBucket: "ecommerce-138ad.appspot.com",
  messagingSenderId: "609957822382",
  appId: "1:609957822382:web:b904208ce7160918d5123f",
};

//firebase auth
const firebaseApp = firebase.initializeApp(config);
const fireAuth = firebase.auth();

export { firebaseApp, fireAuth };
