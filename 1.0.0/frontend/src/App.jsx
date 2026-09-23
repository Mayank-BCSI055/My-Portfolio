import { useEffect } from "react";
import "./App.css";

import MainLayout from "./layouts/MainLayout";


function App() {
  useEffect(() => {
    // Prevent the browser from automatically restoring the scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Always scroll to top on mount (refresh)
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="global-bg-container">
        <div className="ambient-blob ambient-blob-1"></div>
        <div className="ambient-blob ambient-blob-2"></div>
        <div className="bg-pattern-overlay"></div>
      </div>
      <MainLayout />
    </>
  );
}

export default App;
