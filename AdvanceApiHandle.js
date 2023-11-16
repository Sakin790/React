import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products");
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>  
      <h1>Handle Api In React</h1>
      {loading && <h1>Loading..</h1>}
      {error && <h1>Something Went Wrong...</h1>}
      <h2>Number Of Products Are : {products.length}</h2>
      <h4>Products Name : {}</h4>
    </>
  );
}

export default App;
