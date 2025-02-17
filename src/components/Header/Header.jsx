import "./Header.scss";

function Header({ setshowFilterDrawer }) {
  return (
    <>
      <section className="snaps__header">
        <div className="snaps__header-top">
          <h1 className="snaps__header-top-title">Snaps</h1>
          <button
            onClick={() => setshowFilterDrawer((prevState) => !prevState)}
            className="snaps__header-top-button"
          >
            Filters
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
