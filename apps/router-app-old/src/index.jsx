import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
//import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App tab="home" />
  </BrowserRouter>
);

//registerServiceWorker();
//ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
