import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((userData) => {
        setData(userData);
      });
  }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
        Github followers: {data.followers}
      </div>
    </>
  );
};

export default App;
