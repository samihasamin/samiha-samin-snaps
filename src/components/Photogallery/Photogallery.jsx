import "./Photogallery.scss";

function Photogallery({ photos }) {
  return (
    <>
      <div className="snaps__gallery">
        {photos.map((image, index) => {
          return (
            <div className="snaps__gallery-card" key={image.id}>
              <div className="snaps__gallery-card-image">
                <img src={image.photo} alt="Snaps Image" />
                <p>{image.photographer}</p>
              </div>
              <div className="snaps__gallery-card-tags">
                {image?.tags.map((tag, index) => (
                  <div className="snaps__gallery-card-tags-tag" key={index}>
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
