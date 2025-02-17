import "./FilterDrawer.scss";
import tags from "../../data/tags";
import { v4 as uuidv4 } from "uuid";

function FilterDrawer({ activeFilter, handleTagClick }) {
  return (
    <>
      <h2>Filters</h2>
      <div className="filtertags">
        {tags.map((tag) => {
          return (
            <div
              onClick={() => handleTagClick(tag)}
              className="filtertags__tag"
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
    </>
  );
}

export default FilterDrawer;
