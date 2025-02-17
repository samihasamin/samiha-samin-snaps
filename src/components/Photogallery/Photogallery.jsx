import "./Photogallery.scss";

function Photogallery({ photos }) {
  return (
    <>
      <div className="gallery">
        {photos.map((image, index) => {
          return (
            <div className="gallery__card" key={image.id}>
              <div className="gallery__card-image">
                <img
                  className="gallery__card-image-snap"
                  src={image.photo}
                  alt="Snaps Image"
                />
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
          );
        })}
      </div>
    </>
  );
}

export default Photogallery;
