import { useState, useEffect } from "react";
import Product from "./product/modal";
import FetchData from "./api/fetchData";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    let prdcts = await FetchData();
    //console.log(prdcts.data)
    setProducts(prdcts.data);
  };

  useEffect(() => {
    getData();
  }, [products]);
  
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
       {products && products.map((product) =>{
         return (
           <tr key={product._id}>
             <td>{products.indexOf(product)+1}</td>
             <td>{product.brand}</td>
             <td>{product.name}</td>
             <td key={product.id}> 
              <Product
              pName={product.name}
              pBrand={product.brand}
              pColor={product.color}
              pDesc={product.desc}
              pPrice={product.price}
             /></td>
           </tr>
         )
       })} 
       </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
