import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DemoDemo } from "./demo.js";
import "./styles.css";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <DemoDemo />
  </BrowserRouter>
);
