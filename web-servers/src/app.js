const express = require("express"); // express is a function

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/help", (req, res) => {
  res.send("Help Page");
});

app.get("/about", (req, res) => {
  res.send("It is all about weather!");
});

app.get("/weather", (req, res) => {
  res.send("Please find the current weather report");
});

app.listen(3000, () => {
  console.log(`The server is listening on port number 3000`);
});
