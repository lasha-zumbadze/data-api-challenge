export default function Filter({
  setActiveStatus,
  setInactiveStatus,
  setMaleGender,
  setFemaleGender,
  setCurrPage,
  setSortDown,
  setSortUp,
}) {
  function handleGenderSelect() {
    document
      .querySelector(".gender-checkbox")
      .classList.toggle("display-class");

    document
      .querySelector(".gender-selection-arrow")
      .classList.toggle("rotate");
  }

  function handleStatusSelect() {
    document
      .querySelector(".status-checkbox")
      .classList.toggle("display-class");

    document
      .querySelector(".status-selection-arrow")
      .classList.toggle("rotate");
  }

  function handleActiveStatus() {
    const checkbox = document.querySelector("#active");

    if (checkbox.checked) {
      setActiveStatus(true);
    } else {
      setActiveStatus(false);
    }

    setCurrPage(1);
    setSortDown(false);
    setSortUp(false);
  }

  function handleInactiveStatus() {
    const checkbox = document.querySelector("#inactive");

    if (checkbox.checked) {
      setInactiveStatus(true);
    } else {
      setInactiveStatus(false);
    }

    setCurrPage(1);
    setSortDown(false);
    setSortUp(false);
  }

  function handleMaleGender() {
    const checkbox = document.querySelector("#male");

    if (checkbox.checked) {
      setMaleGender(true);
    } else {
      setMaleGender(false);
    }

    setCurrPage(1);
    setSortDown(false);
    setSortUp(false);
  }

  function handleFemaleGender() {
    const checkbox = document.querySelector("#female");

    if (checkbox.checked) {
      setFemaleGender(true);
    } else {
      setFemaleGender(false);
    }

    setCurrPage(1);
    setSortDown(false);
    setSortUp(false);
  }

  return (
    <div className="filter-container">
      <div className="filter-div student-status">
        <div onClick={handleStatusSelect} className="selection">
          <img
            className="status-selection-arrow rotate"
            src="images/icons8-chevron-24.png"
            alt="selection"
          />
          <p>სტუდენტის სტატუსი</p>
        </div>
        <div className="checkbox status-checkbox display-class">
          <div>
            <input
              onChange={handleActiveStatus}
              id="active"
              type="checkbox"
              defaultChecked
            />
            <label htmlFor="active">ACTIVE</label>
          </div>
          <div>
            <input
              onChange={handleInactiveStatus}
              id="inactive"
              type="checkbox"
              defaultChecked
            />
            <label htmlFor="inactive">INACTIVE</label>
          </div>
        </div>
      </div>
      <div className="filter-div student-gender">
        <div onClick={handleGenderSelect} className="selection">
          <img
            className="gender-selection-arrow"
            src="images/icons8-chevron-24.png"
            alt="selection"
          />
          <p>სქესი</p>
        </div>
        <div className=" checkbox gender-checkbox">
          <div>
            <input onChange={handleMaleGender} id="male" type="checkbox" />
            <label htmlFor="male">MALE</label>
          </div>
          <div>
            <input onChange={handleFemaleGender} id="female" type="checkbox" />
            <label htmlFor="female">FEMALE</label>
          </div>
        </div>
      </div>
    </div>
  );
}
