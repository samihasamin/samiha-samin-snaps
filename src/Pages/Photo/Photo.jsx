import photosData from "../../data/photosData";
import "./Photo.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "../../components/Form/Form";

const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com/";
const API_KEY = "?api_key=e0e24dc5-d6b8-42c2-abdd-d066b7290130";

function Photo() {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await axios.get(
        `${BASE_URL}photos/${photoId}${API_KEY}`
      );

      setPhoto(response.data);
    };
    fetchPhoto();
  }, [photoId]);

  console.log(photo);

  if (!photo) {
    return;
    <p>Loading</p>;
  }

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <>
      <section className="photo">
        <nav className="photo__navbar">
          <h1 className="photo__navbar-title">Snaps</h1>
          <button>Home</button>
        </nav>
        <div className="photo-card">
          <img src={photo.photo} alt={photo.photoDescription} />
          <div className="photo-card__tags">
            {photo?.tags.map((tag) => (
              <div className="photo-card__tags-tag">{tag}</div>
            ))}
          </div>
          <div className="photo-card__text">
            <div className="photo-card__text-info">
              <p>Likes</p>
              <p>Photo by {photo.photoprapher}</p>
            </div>
            <div className="photo-card__text-date">
              <p>{formattedDate}</p>
            </div>
          </div>
        </div>
      </section>
      <Form id={photoId} />
    </>
  );
}

export default Photo;
