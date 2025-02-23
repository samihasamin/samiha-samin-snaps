import photosData from "../../data/photosData";
import "./Photo.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com/";
const API_KEY = "?api_key=e0e24dc5-d6b8-42c2-abdd-d066b7290130";

function Photo() {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await axios.get(
        `${BASE_URL}photos/${photoId}${API_KEY}`
      );

      setPhoto(response.data);
    };
    fetchPhoto();
  }, [photoId]);

  return (
    <>
      <section className="photo">
        <nav className="photo__navbar">
          <h1 className="photo__navbar-title">Snaps</h1>
          <button>Home</button>
        </nav>
        <div className="photo-card">
          <img src={photo.photo} alt={photo.photoDescription} />
        </div>
      </section>
    </>
  );
}

export default Photo;
