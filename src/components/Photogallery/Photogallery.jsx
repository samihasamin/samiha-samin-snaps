import "./Photogallery.scss";
import PhotoCard from "../PhotoCard/PhotoCard";
import { Link } from "react-router-dom";

function Photogallery({ photos, showFilterDrawer, activeFilter }) {
  const filteredPhotos = activeFilter
    ? photos.filter((image) => image.tags.includes(activeFilter))
    : photos;
  return (
    <>
      <div className={`gallery ${showFilterDrawer ? "filter-open" : ""}`}>
        {filteredPhotos.map((image, index) => {
          return <PhotoCard key={image.id} image={image} />;
        })}
      </div>
    </>
  );
}

export default Photogallery;
