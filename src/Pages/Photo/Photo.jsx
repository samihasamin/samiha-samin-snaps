import photosData from "../../data/photosData";
import "./Photo.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "../../components/Form/Form";
import Arrow from "../../assets/images/Icons/Arrow.svg";
import LikeOutline from "../../assets/images/Icons/Like_Outline.svg";

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
          <div className="photo__navbar-snaps">
            <h1 className="photo__navbar-snaps-logo">
              <Link style={{ textDecoration: "none" }} to="/">
                {" "}
                Snaps
              </Link>
            </h1>
          </div>
          <div className="photo__navbar-home">
            <img className="photo__navbar-home-arrow" src={Arrow} alt="Arrow" />
            <button className="photo__navbar-home-button">
              <Link
                style={{ textDecoration: "none", color: " #1E6655" }}
                to="/"
              >
                Home
              </Link>
            </button>
          </div>
        </nav>
        <div className="photo__card">
          <img
            className="photo__card-image"
            src={photo.photo}
            alt={photo.photoDescription}
          />
          <div className="photo__card-tags">
            {photo?.tags.map((tag) => (
              <div key={tag} className="photo__card-tags-tag">
                {tag}
              </div>
            ))}
          </div>
          <div className="photo__card__text">
            <div className="photo__card__text-info">
              <div className="photo__card__text-info-likes">
                <img src={LikeOutline} alt="Like_Outline" />
                <div className="photo__card__text-info-likes-count">
                  <p>
                    {photo.likes}
                    <span>likes</span>
                  </p>
                </div>
              </div>
              <div className="photo__card__text-info-photographer">
                <p>Photo by {photo.photographer}</p>
              </div>
            </div>
            <div className="photo__card__text-date">
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
