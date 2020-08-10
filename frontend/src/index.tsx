import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { FirebaseAppProvider } from "reactfire";
const firebaseConfig = {
  apiKey: "AIzaSyBomBw02gL8xEQwfI0hegch-wy6YtEEwTw",
  authDomain: "quiet-year.firebaseapp.com",
  databaseURL: "https://quiet-year.firebaseio.com",
  projectId: "quiet-year",
  storageBucket: "quiet-year.appspot.com",
  messagingSenderId: "583477464024",
  appId: "1:583477464024:web:ad48fdb3bf58ba7e1900ad",
  measurementId: "G-W0K6CDMQ4P",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
