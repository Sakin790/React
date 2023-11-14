import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Jokes, setjokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Handle Own Api </h1>
      <p>JOKES :{Jokes.length}</p>

      {Jokes.map((Jokes, index) => (
        <div key={Jokes.id}>
          <h3>{Jokes.tile}</h3>
          <p>{Jokes.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
