import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
//import registerServiceWorker from "./registerServiceWorker";
//import App from "./App";

//import Counters from "./components/counters";
import { Teacher } from './teacher';

let root = document.getElementById("root");
root = createRoot(root);


const teacher = new Teacher("Mosh", "MSc");




root.render(
  <StrictMode>
    <p>{teacher.teach()}</p>
    <p>{teacher.walk()}</p>

  </StrictMode>
);
