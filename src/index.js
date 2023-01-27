import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StateProvider from './Content';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
       <App />
    </StateProvider> 
  </React.StrictMode>
);

