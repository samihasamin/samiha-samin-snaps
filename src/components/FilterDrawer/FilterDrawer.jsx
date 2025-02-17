import "./FilterDrawer.scss";
import tags from "../../data/tags";
import { v4 as uuidv4 } from "uuid";

function FilterDrawer({ activeFilter, handleTagClick }) {
  return (
    <>
      <div className="filterdrawer">
        <h2 className="filterdrawer__title">Filters</h2>
        <div className="filterdrawer__tags">
          {tags.map((tag) => {
            return (
              <div
                onClick={() => handleTagClick(tag)}
                className="filterdrawer__tags--tag"
                key={uuidv4()}
                style={{
                  backgroundColor: activeFilter === tag ? "#1E6655" : "#FFFFFF",
                  color: activeFilter === tag ? "#FFFFFF" : "#1E6655",
                }}
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FilterDrawer;
