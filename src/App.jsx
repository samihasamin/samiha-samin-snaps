import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Photogallery from "./components/Photogallery/Photogallery";
import photosData from "./data/photosData";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
import OurMission from "./components/OurMission/OurMission";
import { v4 as uuid } from "uuid";

function App() {
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  const handleTagClick = (tag) => {
    setActiveFilter(activeFilter === tag ? "" : tag);
  };

  return (
    <>
      <Header setShowFilterDrawer={setShowFilterDrawer} />
      <div className="filter-container">
        <div
          className={`filter-drawer ${showFilterDrawer ? "filter-open" : ""}`}
        >
          {showFilterDrawer ? (
            <FilterDrawer
              activeFilter={activeFilter}
              handleTagClick={handleTagClick}
            />
          ) : (
            ""
          )}
        </div>
        <div
          className={`photo-container ${showFilterDrawer ? "filter-open" : ""}`}
        >
          <OurMission />
          <Photogallery
            photos={photosData}
            showFilterDrawer={showFilterDrawer}
            activeFilter={activeFilter}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
