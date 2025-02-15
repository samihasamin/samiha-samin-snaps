import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Photogallery from "./components/Photogallery/Photogallery";
import photosData from "./data/photosData";

function App() {
  const [photos, setPhotos] = useState(photosData);
  return (
    <>
      <Header />
      <Photogallery photos={photos} />
      <Footer />
    </>
  );
}

export default App;
