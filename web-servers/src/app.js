const express = require("express"); // express is a function

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.get("/help", (req, res) => {
  res.send([{ name: "Mert" }, { name: "Almira" }]);
});

app.get("/about", (req, res) => {
  res.send("<h1>It is all about weather!</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    location: "Leuven",
    forecast: "It is 5 degrees and 5% chance of rain"
  });
});

app.listen(3000, () => {
  console.log(`The server is listening on port number 3000`);
});
