import { useState, useEffect } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Photogallery from "../../components/Photogallery/Photogallery";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import OurMission from "../../components/OurMission/OurMission";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

function Home() {
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(`${BASE_URL}photos`);

      setPhotos(response.data);
    };
    fetchPhotos();
  }, []);

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
          <OurMission showFilterDrawer={showFilterDrawer} />
          <Photogallery
            photos={photos}
            showFilterDrawer={showFilterDrawer}
            activeFilter={activeFilter}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
