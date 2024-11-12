import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ex1 from "./ex1/App.js";
import Ex2 from "./ex2/App.js";
import "./nav.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className="navLink" to="/">
                Ex1
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/ex2">
                Ex2
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/">
            <Route path="/" element={<Ex1 />} />
            <Route path="/ex2" element={<Ex2 />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

//! um
//todo dois
//? três
//* quatro
//& cinco
