import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Firebase/reactfire
import { FirebaseAppProvider } from "reactfire";

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