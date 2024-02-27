import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
