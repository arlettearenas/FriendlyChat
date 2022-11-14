/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
//import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyAIplLk_Jg_DP0yIqRGk4UxexAqiMFFMm4",
  authDomain: "friendlychat-d4a67.firebaseapp.com",
  projectId: "friendlychat-d4a67",
  storageBucket: "friendlychat-d4a67.appspot.com",
  messagingSenderId: "58710052208",
  appId: "1:58710052208:web:74426c9c1122d89cfb93b5"
};
//const app = initializeApp(config);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

