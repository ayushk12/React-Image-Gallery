import React from "react";

import ImageSearch from "./ImageSearch/ImageSearch";

const API_KEY = "17640339-e9d4068438324f9251e444468";
const url = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`;

class App extends React.Component {
  state = {
    images: [],
  };
  handleGetRequest = async () => {
    const request = await fetch(url);
    const response = await request.json();
    this.setState({ images: response.hits });
    console.log(this.state.images);
  };

  componentDidMount() {
    this.handleGetRequest();
  }

  render() {
    return (
      <div>
        <h1>Image</h1>
        <ImageSearch handleGetRequest={this.handleGetRequest} />
      </div>
    );
  }
}

export default App;
