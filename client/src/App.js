import React, { Component } from "react";
import Product from "./product/modal";
import TopNav from "./topNav/topNav";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total1: 0,
      total2: 0,
      total3: 0,
      total4: 0,
      total5: 0,
    };
  }

  IncrementAmount = async (index, pId) => {
    console.log(index);
    let amnt = 1;
    if (index === 1) {
      amnt = this.state.total1 + 1;
      this.setState({ total1: amnt });
      console.log(this.state.total1);
    } else if (index === 2) {
      amnt = this.state.total2 + 1;
      this.setState({ total2: amnt });
    } else if (index === 3) {
      amnt = this.state.total3 + 1;
      this.setState({ total3: amnt });
    } else if (index === 4) {
      amnt = this.state.total4 + 1;
      this.setState({ total4: amnt });
    } else if (index === 5) {
      amnt = this.state.total5 + 1;
      this.setState({ total5: amnt });
    }

    await fetch(`http://localhost:8080/api/products/${pId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amnt }),
    })
      .then((res) => res.json())
      .then((err) => console.log(err));
  };

  handleClickIncrement = (index, pId) => {
    this.IncrementAmount(index, pId);
  };

  DecrementAmount = async (index, pId) => {
    console.log(index);
    let amnt = 1;
    if (index === 1) {
      amnt = this.state.total1 - 1;
      this.setState({ total1: amnt });
    } else if (index === 2) {
      amnt = this.state.total2 - 1;
      this.setState({ total2: amnt });
    } else if (index === 3) {
      amnt = this.state.total3 - 1;
      this.setState({ total3: amnt });
    } else if (index === 4) {
      amnt = this.state.total4 - 1;
      this.setState({ total4: amnt });
    } else if (index === 5) {
      amnt = this.state.total5 - 1;
      this.setState({ total5: amnt });
    }

    await fetch(`http://localhost:8080/api/products/${pId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amnt }),
    })
      .then((res) => res.json())
      .then((err) => console.log(err));
  };

  handleClickDecrement = (index, pId) => {
    this.DecrementAmount(index, pId);
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        this.setState({ products: data.data });
      })
      .catch((error) => console.log(error.message));
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <TopNav parentToChild={this.state.total1+this.state.total2+this.state.total3+this.state.total4+this.state.total5} />
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
                let amn;
                if (this.state.products.indexOf(product) + 1 === 1) {
                  amn = this.state.total1;
                } else if (this.state.products.indexOf(product) + 1 === 2) {
                  amn = this.state.total2;
                } else if (this.state.products.indexOf(product) + 1 === 3) {
                  amn = this.state.total3;
                } else if (this.state.products.indexOf(product) + 1 === 4) {
                  amn = this.state.total4;
                } else if (this.state.products.indexOf(product) + 1 === 5) {
                  amn = this.state.total5;
                }
                return (
                  <tr key={product._id}>
                    <td>{this.state.products.indexOf(product) + 1}</td>
                    <td>{product.brand}</td>
                    <td>{product.name}</td>
                    <td key={product.id}>
                      <Product
                        parentToChild={amn}
                        clickHandleIncrement={() =>
                          this.handleClickIncrement(
                            this.state.products.indexOf(product) + 1,
                            product._id
                          )
                        }
                        clickHandleDecrement={() =>
                          this.handleClickDecrement(
                            this.state.products.indexOf(product) + 1,
                            product._id
                          )
                        }
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
