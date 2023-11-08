import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Popup() {
  function handlePopUpCancel() {
    document.querySelector(".modal").classList.add("hidden");

    document.querySelector(".overlay").classList.add("hidden");
  }

  useEffect(function () {
    document.addEventListener("keydown", function (e) {
      if (e.code === "Tab") {
        e.preventDefault();
      }

      if (e.code === "Escape") {
        handlePopUpCancel();
      }
    });

    document
      .querySelector(".overlay")
      .addEventListener("click", handlePopUpCancel);
  }, []);

  function handleLogUout() {
    localStorage.removeItem("loggedIn");
  }

  return (
    <>
      <div className="modal hidden">
        <h2 className="modal__header">Are you sure you want to log out?</h2>
        <form className="btns">
          <button
            onClick={(e) => {
              e.preventDefault();
              handlePopUpCancel();
            }}
            className="btn popup-btn"
          >
            Cancel
          </button>

          <Link to={"/login"}>
            <button
              onClick={handleLogUout}
              style={{ backgroundColor: "#4980c0", width: "20rem" }}
              className="btn popup-btn"
            >
              Log out &rarr;
            </button>
          </Link>
        </form>
      </div>

      <div className="overlay hidden"></div>
    </>
  );
}
