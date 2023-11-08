import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Img";

export default function LogIn() {
  const [upload, setUpload] = useState(
    localStorage.getItem("uploadedImage") ? true : false
  );

  const [filled, setFilled] = useState(
    localStorage.getItem("userName") ? true : false
  );
  const [img, setImg] = useState(localStorage.getItem("uploadedImage") || "");
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  const disabled = filled && upload ? false : true;

  useEffect(function () {
    const storedImage = localStorage.getItem("uploadedImage");

    if (storedImage) setImg(storedImage);
  }, []);

  function handleUpload(e) {
    setUpload(true);

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImg(reader.result);
      localStorage.setItem("uploadedImage", reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleFilled(e) {
    setFilled(e.target.value ? true : false);
    setUserName(e.target.value);
    localStorage.setItem("userName", e.target.value);
  }

  return (
    <div className="log-in">
      <form className="log-in-container">
        <h1>Get Started</h1>
        <p>add a photo</p>

        <div className="upload-container">
          <>
            <label
              onClick={() => setUpload(false)}
              htmlFor="file"
              className="upload-photo"
              style={upload ? { opacity: "0" } : {}}
            >
              <svg
                width="84"
                height="76"
                viewBox="0 0 84 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_21)">
                  <path
                    d="M68.9733 21.5951V13.6244H60.9467V8.06342H68.9733V0H74.5733V8.06342H82.6933V13.6244H74.5733V21.5951H68.9733ZM5.60001 74.7951C4.86653 74.7975 4.14034 74.6507 3.46616 74.3638C2.79199 74.0769 2.18412 73.6559 1.68001 73.1268C1.14722 72.6262 0.723291 72.0226 0.434359 71.3531C0.145427 70.6837 -0.00239102 69.9625 1.36144e-05 69.2341V21.6878C0.00692489 20.9677 0.15916 20.2563 0.447719 19.5957C0.736277 18.935 1.1553 18.3385 1.68001 17.8415C2.17742 17.3007 2.78296 16.8689 3.45793 16.5736C4.1329 16.2784 4.86246 16.1262 5.60001 16.1268H19.32L26.1333 8.06342H52.2667V13.6244H28.7467L21.9333 21.6878H5.60001V69.2341H69.0667V30.3073H74.6666V69.2341C74.6673 69.9666 74.514 70.691 74.2167 71.3613C73.9194 72.0316 73.4846 72.6329 72.94 73.1268C72.4394 73.6479 71.8388 74.064 71.1735 74.3505C70.5082 74.6371 69.7918 74.7883 69.0667 74.7951H5.60001ZM37.3333 61.2634C39.434 61.2963 41.5198 60.9081 43.466 60.1221C45.4121 59.3361 47.1786 58.1684 48.6598 56.6889C50.1411 55.2093 51.3066 53.4483 52.0867 51.5111C52.8668 49.574 53.2454 47.5005 53.2 45.4146C53.2521 43.3408 52.8728 41.2787 52.0859 39.357C51.299 37.4354 50.1214 35.6955 48.6267 34.2463C47.1495 32.7759 45.3866 31.6191 43.4452 30.8463C41.5037 30.0735 39.4243 29.701 37.3333 29.7512C35.2428 29.6974 33.1631 30.0651 31.2197 30.832C29.2763 31.599 27.5097 32.7492 26.0267 34.2133C24.5436 35.6773 23.3749 37.4248 22.5911 39.3501C21.8074 41.2753 21.4248 43.3384 21.4667 45.4146C21.41 47.5057 21.782 49.5863 22.5602 51.5301C23.3383 53.4739 24.5064 55.2403 25.9933 56.722C27.4678 58.2122 29.2357 59.3846 31.1868 60.166C33.138 60.9474 35.2303 61.3209 37.3333 61.2634ZM37.3333 55.7024C35.968 55.7472 34.6081 55.5109 33.3392 55.0084C32.0703 54.506 30.9198 53.7483 29.96 52.7829C29.0022 51.8121 28.252 50.6588 27.7548 49.3925C27.2576 48.1262 27.0235 46.7731 27.0667 45.4146C27.0266 44.0773 27.2626 42.7461 27.7602 41.5028C28.2578 40.2595 29.0064 39.1305 29.96 38.1854C30.9267 37.2324 32.0795 36.486 33.3476 35.9918C34.6156 35.4977 35.972 35.2664 37.3333 35.3122C38.6866 35.2752 40.0335 35.5107 41.2927 36.0045C42.5519 36.4983 43.6973 37.2401 44.66 38.1854C45.626 39.1236 46.3859 40.2503 46.8918 41.4945C47.3978 42.7387 47.6389 44.0734 47.6 45.4146C47.6422 46.777 47.4031 48.1336 46.8975 49.4008C46.3919 50.668 45.6304 51.819 44.66 52.7829C43.7042 53.7405 42.561 54.4935 41.3009 54.9957C40.0409 55.4978 38.6906 55.7383 37.3333 55.7024Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_21">
                    <rect width="84" height="76" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            {upload ? (
              <Image img={img} />
            ) : (
              <input
                id="file"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => handleUpload(e)}
              />
            )}
          </>
        </div>

        <p>fill in your name</p>

        <input
          type="text"
          placeholder="your name"
          value={userName}
          onChange={(e) => handleFilled(e)}
        />
        <Link to="/form">
          <button
            className="btn sign-in"
            style={disabled ? { filter: "grayscale(1)" } : {}}
            disabled={disabled}
          >
            Sign in
          </button>
        </Link>
      </form>
    </div>
  );
}
