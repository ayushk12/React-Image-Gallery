import React from "react";

import ImageSearch from "./ImageSearch/ImageSearch";
import ImageList from "./ImageList/ImageList";

const API_KEY = "17640339-e9d4068438324f9251e444468";

class App extends React.Component {
  state = {
    images: [],
  };
  async componentDidMount() {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${"mountain,cars"}&image_type=photo&pretty=true`;
    const request = await fetch(url);
    const response = await request.json();
    this.setState({ images: response.hits });
  }
  handleGetRequest = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchValue.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`;
    const request = await fetch(url);
    const response = await request.json();
    this.setState({ images: response.hits });
    // console.log(searchTerm);
    // console.log(this.state.images);
  };

  render() {
    return (
      <div>
        {/* <h1>Image</h1> */}
        <ImageSearch handleGetRequest={this.handleGetRequest} />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
