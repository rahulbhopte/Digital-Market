import React from "react";
import Loader from "./components/Loader";
import ProductGrid from "./components/ProductGrid";
import Search from "./components/Search";
import { products } from "./constants";
class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      loading: false,
      productsList: [],
      backupList: products
    };
  }

  componentDidMount() {
    console.log("mounted");
    this.setState({
      loading: true
    });
    fetch("https://json.extendsclass.com/bin/7e69e0bc8561")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          productsList: data,
          loading: false
        });
      })
      .catch((error) => {
        console.log("Error is", error);
      });
  }

  updateProducts = (newProducts) => {
    this.setState({
      backupList: newProducts
    });
  };

  componentDidUpdate() {
    console.log("component Did Update");
  }

  render() {
    console.log("Render");
    return (
      <div
        style={{
          background: this.state.loading ? "blue" : "green"
        }}
      >
        <h1>Cloth Market</h1>
        <Search
          productsList={this.state.productsList}
          updateProducts={this.updateProducts}
        />

        {/* If Loading Then Loader Else Products Grid */}

        {this.state.loading ? (
          <Loader />
        ) : (
          <ProductGrid productsList={this.state.backupList} />
        )}
      </div>
    );
  }
}

export default App;
