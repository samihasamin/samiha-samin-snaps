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
  const [photos, setPhotos] = useState(photosData);
  const [showFilterDrawer, setshowFilterDrawer] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  const handleTagClick = (tag) => {
    const filteredPhotos = photosData.filter((image) =>
      image.tags.includes(tag)
    );

    activeFilter === tag ? setPhotos(photosData) : setPhotos(filteredPhotos);
    activeFilter === tag ? setActiveFilter("") : setActiveFilter(tag);
  };

  return (
    <>
      <Header setshowFilterDrawer={setshowFilterDrawer} />
      {showFilterDrawer ? (
        <FilterDrawer
          activeFilter={activeFilter}
          handleTagClick={handleTagClick}
        />
      ) : (
        ""
      )}
      <OurMission />
      <Photogallery photos={photos} />
      <Footer />
    </>
  );
}

export default App;
