import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
//import registerServiceWorker from "./registerServiceWorker";
//import App from "./App";

import Counters from "./components/counters";

let root = document.getElementById("root");
root = createRoot(root);

root.render(
  <StrictMode>
    <Counters />
  </StrictMode>
);
