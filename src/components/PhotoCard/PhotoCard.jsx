import "./PhotoCard.scss";
import { Link } from "react-router-dom";

function PhotoCard({ image }) {
  return (
    <>
      <div className="gallery__card" key={image.id}>
        <div className="gallery__card-image">
          <Link key={image.id} to={`/photo/${image.id}`}>
            <img
              className="gallery__card-image-snap"
              src={image.photo}
              alt="Snaps Image"
            />
          </Link>
          <p className="gallery__card-image-photographer">
            {image.photographer}
          </p>
        </div>
        <div className="gallery__card-tags">
          {image?.tags.map((tag, index) => (
            <div className="gallery__card-tags-tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PhotoCard;
