import { useState, useEffect } from 'react';
import FetchData from './api/fetchData';
import './App.css';

function App() {
  const [ products,  setProducts ] = useState([]);
  const getData = async () => {
    let prdcts = await FetchData();
    //console.log(prdcts.data)
    setProducts(prdcts.data);
  };

  useEffect(() => {
    getData();
  }, [products])
  

  return (
    <div className="App">
      <ol>
        {products.map(product => {
          return (
            <li key={product._id}>{product.name}</li>
          )
        })}
      </ol>
    </div>
  );
}

export default App;
