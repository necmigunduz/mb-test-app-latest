import React, { Component } from "react";
import Product from "./product/modal";
import FetchData from "./api/fetchData";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        this.setState({ products: data.data });
      })
      .catch((error) => console.log(error.message));
  }

  render() {
    return (
      <>
        <div className="App">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Brand</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product) => {
                  return (
                    <tr key={product._id}>
                      <td>{this.state.products.indexOf(product) + 1}</td>
                      <td>{product.brand}</td>
                      <td>{product.name}</td>
                      <td key={product.id}>
                        <Product
                          pName={product.name}
                          pBrand={product.brand}
                          pColor={product.color}
                          pDesc={product.desc}
                          pPrice={product.price}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
