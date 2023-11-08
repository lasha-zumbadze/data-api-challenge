import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  useEffect(function () {
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
  }, []);

  return (
    <div className="landing-container">
      <img src="/images/pngegg.png" alt="note" />
      <h1>Get Started Today</h1>
      <Link to="/login">
        <button className="btn get-start">Get Started</button>
      </Link>
    </div>
  );
}
