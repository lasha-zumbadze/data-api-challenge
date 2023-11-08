import Landing from "./Landing";
import LogIn from "./logIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApiPage from "./ApiPage";
import Form from "./Form";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/form" element={<Form />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Router>
  );
}
