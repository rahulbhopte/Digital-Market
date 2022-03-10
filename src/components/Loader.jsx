import React from "react";

class Loader extends React.Component {
  constructor() {
    super();
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("Did Mount");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Will Unmount");
  }

  render() {
    console.log("Render");
    return <h1>Loading...</h1>;
  }
}

export default Loader;
