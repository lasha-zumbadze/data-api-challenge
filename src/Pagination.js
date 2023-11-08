export default function Pagination({
  pageNum,
  setCurrPage,
  curPage,
  formPage,
}) {
  return (
    <div className="pagination-container">
      {!formPage ? (
        <>
          {Array.from({ length: pageNum }, (_, i) => (
            <button
              key={i}
              onClick={(e) => {
                setCurrPage(e.target.value);
              }}
              value={i + 1}
              className="country-page"
              style={
                +curPage === i + 1
                  ? { background: "#4980c0", color: "#fff" }
                  : {}
              }
            >
              {i + 1}
            </button>
          ))}
        </>
      ) : (
        <>
          {pageNum !== 1 && (
            <>
              {" "}
              <div onClick={() => setCurrPage(1)} className="first-page">
                <img src="images\chevrons-left.png" alt="left arrow" />
              </div>
              <div
                onClick={() => {
                  if (curPage > 1) setCurrPage(curPage - 1);
                }}
                className="previous-page"
              >
                <img src="images\chevron-left.png" alt="left arrow" />
              </div>{" "}
            </>
          )}

          {Array.from({ length: pageNum }, (_, i) => (
            <button
              key={i}
              onClick={(e) => {
                setCurrPage(Number(e.target.value));
              }}
              value={i + 1}
              className="page"
              style={
                +curPage === i + 1
                  ? { borderBottom: "2px solid #fff", fontWeight: "500" }
                  : {}
              }
            >
              {i + 1}
            </button>
          ))}

          {pageNum !== 1 && (
            <>
              <div
                onClick={() => {
                  console.log(curPage, pageNum);
                  if (curPage < pageNum) setCurrPage(curPage + 1);
                }}
                className="next-page"
              >
                <img src="images\chevron-right.png" alt="right arrow" />
              </div>
              <div onClick={() => setCurrPage(pageNum)} className="last-page">
                <img src="images\chevrons-right.png" alt="double right arrow" />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
