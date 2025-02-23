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

const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com/";
const API_KEY = "?api_key=e0e24dc5-d6b8-42c2-abdd-d066b7290130";

function Home() {
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(`${BASE_URL}/photos${API_KEY}`);

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
