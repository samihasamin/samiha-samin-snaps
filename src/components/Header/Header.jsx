import "./Header.scss";

function Header() {
  return (
    <>
      <section className="snaps__header">
        <h1 className="snaps__header-title">Snap</h1>
        <h3 className="snaps__header-subtitle">Our Mission:</h3>
        <p className="snaps__header-description">
          Provide to photographers a space to share photos of the neighborhoods
          the cherish,{" "}
          <span className="snaps__header-description--italic">
            expressed in their unique style.
          </span>
        </p>
      </section>
    </>
  );
}

export default Header;
