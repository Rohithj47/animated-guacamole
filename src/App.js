import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import page components
import HomePage from "./Pages/HomePage";
import QuestionDetailPage from "./Pages/QuestionDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/:id" element={<QuestionDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
