import API from "./API";
import Navbar from "./Navbar";
import Image from "./Img";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import VideoBackground from "./VideoBakcground";

export default function ApiPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [countriesData, setCountriesData] = useState([]);
  const [curPage, setCurrPage] = useState(1);
  const resultsPerPage = 10;
  const pageNum = Math.ceil(countriesData.length / resultsPerPage);

  const [uploadedImage, setUploadedImage] = useState("");
  const [userName, setUserName] = useState("");

  const [selectedRegion, setSelectRegion] = useState("europe");
  const [selectCountry, setSelectCountry] = useState("");

  const url = `https://restcountries.com/v3.1/${
    selectCountry ? `name/${selectCountry}` : `region/${selectedRegion}`
  }`;

  function handleSelectRegion(e) {
    setSelectRegion(e.target.value);
    setCurrPage(1);
  }

  function handleSelectCountry(e) {
    setSelectCountry(e.target.value);
    setCurrPage(1);
  }

  function handlePopUp() {
    document.querySelector(".modal").classList.remove("hidden");

    document.querySelector(".overlay").classList.remove("hidden");
  }

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    const storedName = localStorage.getItem("userName");

    if (storedImage) {
      setUploadedImage(storedImage);
    }
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCountries() {
        try {
          setIsLoading(true);
          const res = await fetch(url, { signal: controller.signal });

          if (!res.ok)
            throw new Error("Something went wrong with fetching countries");

          const data = await res.json();

          if (data.Response === "False") throw new Error("country not found");

          setCountriesData(data);
        } catch (error) {
          if (error.name !== "AbortError") console.error(error.message);
          setCountriesData([]);
        } finally {
          setIsLoading(false);
        }
      }

      if (selectCountry && selectCountry.length < 2) {
        setCountriesData([]);
        return;
      }

      fetchCountries();

      return function () {
        controller.abort();
      };
    },
    [url, selectCountry]
  );

  useEffect(function () {
    document.body.style.display = "block";
  }, []);

  return (
    <div className="api">
      <VideoBackground />
      <Navbar
        name={userName}
        setUploadedImage={setUploadedImage}
        setUserName={setUserName}
      >
        <Image onPopUp={handlePopUp} img={uploadedImage} />
      </Navbar>

      <div className="api-page">
        <header className="api-header">
          <input
            value={selectCountry}
            onChange={(e) => handleSelectCountry(e)}
            type="text"
            placeholder="Search for a country..."
          />
          <select value={selectedRegion} onChange={handleSelectRegion}>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>

            <option value="oceania">Oceania</option>
          </select>
        </header>

        <API
          selectedRegion={selectedRegion}
          isLoading={isLoading}
          countriesData={countriesData}
          curPage={curPage}
          resultsPerPage={resultsPerPage}
        />
        <Pagination
          pageNum={pageNum}
          countriesData={countriesData}
          setCurrPage={setCurrPage}
          curPage={curPage}
        />
      </div>
    </div>
  );
}
