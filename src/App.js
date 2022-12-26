import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";

function App() {
    return (
      <Router>
        <div>
            <section>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </section>
        </div>
      </Router>
  );
}

export default App;
