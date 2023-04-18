import "./App.css"
import { useState, useEffect } from "react";
import { Products } from "./component/Products";

function App() {
  const [products, setProduct] = useState([]);
  const fetchProduct = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <table class="table">
        <thead>
          <tr >
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Product</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <Products products={products} />
      </table>
    </div>
  );
}

export default App;
