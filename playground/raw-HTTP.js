const https = require("https");

const url =
  "https://api.darksky.net/forecast/04b7a140f48a161bab606bc04471c4fe/37.8267,-122.4233?units=si";

const request = https.request(url, response => {
  let data = "";
  response.on("data", chunk => {
    data += chunk.toString();
  });

  response.on("end", () => {
    data = JSON.parse(data);
    console.log(data);
  });
  request.on("error", () => {
    console.log("An error", error);
  });
});

request.end();
