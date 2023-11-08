import Landing from "./Landing";
import LogIn from "./logIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApiPage from "./ApiPage";
import Form from "./Form";
import PrivateRoute from "./PrivateRoute";
import { useEffect, useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={<LogIn setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
        />
        <Route
          path="/form"
          element={
            <PrivateRoute loggedIn={loggedIn}>
              <Form setLoggedIn={setLoggedIn} />
            </PrivateRoute>
          }
        />
        <Route
          path="/api"
          element={
            <PrivateRoute loggedIn={loggedIn}>
              <ApiPage setLoggedIn={setLoggedIn} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
