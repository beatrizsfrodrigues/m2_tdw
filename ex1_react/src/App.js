import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ex1 from "./ex1/App.js";
import Ex2 from "./ex2/App.js";
import Ex3 from "./ex3/App.js";
import { Provider } from "react-redux";
import { store } from "./ex3/redux/store";
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
            <li>
              <Link className="navLink" to="/ex3">
                Ex3
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/">
            <Route path="/" element={<Ex1 />} />
            <Route path="/ex2" element={<Ex2 />} />
            <Route
              path="/ex3"
              element={
                <Provider store={store}>
                  <Ex3 />
                </Provider>
              }
            />
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
