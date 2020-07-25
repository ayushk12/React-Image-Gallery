import React from "react";

const ImageSearch = (props) => {
  return (
    <div>
      <form onSubmit={props.handleGetRequest}>
        <input
          type="text"
          autoComplete="off"
          name="searchValue"
          placeholder="search for images..."
        />
        <button>search</button>
      </form>
    </div>
  );
};

export default ImageSearch;
