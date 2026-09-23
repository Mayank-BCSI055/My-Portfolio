import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/typography.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/animations.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <ErrorBoundary>

      <App />

    </ErrorBoundary>

  </React.StrictMode>

);