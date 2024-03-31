import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import page components
import QuestionPage from "./Pages/QuestionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/questions" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
