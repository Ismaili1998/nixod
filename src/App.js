import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import ContactContainer from "./pages/ContactContainer";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact/" element={<ContactContainer />} />
    
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
