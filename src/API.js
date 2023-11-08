export default function API({
  isLoading,
  countriesData,
  curPage,
  resultsPerPage,
}) {
  const start = (curPage - 1) * resultsPerPage; //0;
  const end = curPage * resultsPerPage; //10;

  console.log(countriesData);
  return (
    <>
      <div className="api-container">
        {!isLoading &&
          countriesData
            .map((c, i) => {
              const capital = c.capital && c.capital[0];
              return (
                <CountryCard
                  key={i}
                  flag={c.flags.png}
                  country={c.name.common}
                  region={c.region}
                  capital={capital}
                  population={c.population}
                />
              );
            })
            .slice(start, end)}
      </div>
    </>
  );
}

function CountryCard({ flag, country, region, capital, population }) {
  return (
    <div className="country-card">
      <img src={flag} alt="flag" />
      <div className="country-info">
        <div className="country">
          <h1>{country}</h1>
        </div>
        <div className="country-data">
          <div>
            <span>Population</span>
            <p>{(+population / 1000000).toFixed(1)}m</p>
          </div>
          <div>
            <span>Region</span>
            <p>{region}</p>
          </div>
          <div>
            <span>capital</span>
            <p>{capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
