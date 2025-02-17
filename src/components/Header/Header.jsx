import "./Header.scss";
import FilterIcon from "../../assets/images/Icons/Filter.svg";

function Header({ setshowFilterDrawer }) {
  return (
    <>
      <section className="snaps__header">
        <div className="snaps__header-top">
          <h1 className="snaps__header-top-title">Snaps</h1>
          <div className="snaps__header-top-filter">
            <button
              onClick={() => setshowFilterDrawer((prevState) => !prevState)}
              className="snaps__header-top-filter-button"
            >
              Filters
              <img
                className="snaps__header-top-filter-icon"
                src={FilterIcon}
                alt="Filter Icon"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
