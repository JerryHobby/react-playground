import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

//registerServiceWorker();
//ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
