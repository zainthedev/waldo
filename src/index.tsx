import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Firebase/reactfire
import { FirebaseAppProvider } from "reactfire";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

ReactDOM.render(
  <React.StrictMode>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


//Try this if the above doesn't work
//ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <FirebaseAppProvider firebaseConfig={config}>
  //     <App />
  //   </FirebaseAppProvider>
  // </StrictMode>