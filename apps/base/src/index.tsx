import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button } from "components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1 className="font-sans text-3xl font-bold text-primary-500">
      hello base
    </h1>
    <Button>tacos</Button>
  </React.StrictMode>
);
