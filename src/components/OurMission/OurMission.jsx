import "./OurMission.scss";

function OurMission({ showFilterDrawer }) {
  return (
    <>
      <section
        className={`ourmission ${showFilterDrawer ? "filter-open" : ""}`}
      >
        <h3 className="ourmission__title">Our mission:</h3>
        <p className="ourmission__description">
          Provide to photographers a space to share photos of the neighborhoods
          the cherish,{" "}
          <span className="ourmission__description--italic">
            expressed in their unique style.
          </span>
        </p>
      </section>
    </>
  );
}

export default OurMission;
