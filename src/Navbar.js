import { Link } from "react-router-dom";
import Popup from "./PopUp";

export default function Navbar({ name, children, uploadedImage, setFormPage }) {
  return (
    <>
      <Popup name={name} uploadedImage={uploadedImage} />
      <nav>
        <div>
          <Link style={{ textDecoration: "none" }} to={"/form"}>
            <p>Form</p>
          </Link>
          <Link
            onSubmit={() => setFormPage(false)}
            style={{ textDecoration: " none" }}
            to={"/api"}
          >
            <p>API</p>
          </Link>
        </div>
        <div className="user">
          <p>{name || "Your name"}</p>
          {children || <div className="img-placeholder"></div>}
        </div>
      </nav>
    </>
  );
}
