import { useState, useEffect } from "react";
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
  let no = 0;
  return (
    <div className="App">
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Brand</th>
          <th scope="col">Product Name</th>
        </tr>
      </thead>
      <tbody>
       {products.map(product =>{
         return (
           <tr key={product._id}>
             <td scope="row">{products.indexOf(product)+1}</td>
             <td>{product.brand}</td>
             <td>{product.name}</td>
           </tr>
         )
       })} 
       </tbody>
      </table>
    </div>
  );
}

export default App;
