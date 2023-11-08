export default function API({
  isLoading,
  countriesData,
  curPage,
  resultsPerPage,
}) {
  const start = (curPage - 1) * resultsPerPage; //0;
  const end = curPage * resultsPerPage; //10;

  return (
    <>
      <div className="api-container">
        {!isLoading &&
          countriesData
            .map((c, i) => (
              <CountryCard
                key={i}
                flag={c.flags.png}
                country={c.name.common}
                region={c.region}
                language={Object.values(c.languages)[0]}
                currency={Object.values(c.currencies)[0].name}
                population={c.population}
              />
            ))
            .slice(start, end)}
      </div>
    </>
  );
}

function CountryCard({
  flag,
  country,
  region,
  language,
  currency,
  population,
}) {
  return (
    <div className="country-card">
      <img src={flag} alt="flag" />
      <div className="country-info">
        <div className="country">
          <h1>{country}</h1>
          <p>{region}</p>
        </div>
        <div className="country-data">
          <span>👨‍👩‍👧‍👦</span>
          <p>{(+population / 1000000).toFixed(1)}m people</p>
          <span>🗣️</span>
          <p>{language}</p>
          <span>💰</span>
          <p>{currency}</p>
        </div>
      </div>
    </div>
  );
}
