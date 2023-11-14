const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      tile: "jokes One",
      content: " This is a Jokes",
    },
    {
      id: 2,
      tile: "jokes Two",
      content: " This is a Jokes",
    },
    {
      id: 3,
      tile: "jokes Three",
      content: " This is a Jokes",
    },
    {
        id: 3,
        tile: "jokes Three",
        content: " This is a Jokes",
      },
      {
        id: 3,
        tile: "jokes Three",
        content: " This is a Jokes",
      },
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Running at Port ${PORT}`);
});
