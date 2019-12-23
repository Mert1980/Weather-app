const request = require("request");

const url =
  "https://api.darksky.net/forecast/04b7a140f48a161bab606bc04471c4fe/37.8267,-122.4233?units=si&lang=tr";

request({ url: url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body)
  // console.log(data.currently)
  // json:true ==> automatically parses JSON string
  // console.log(response.body.currently);
  const temp = response.body.currently.temperature;
  const rain = response.body.currently.precipProbability;
  const dailySummary = response.body.daily.data[0].summary;
  console.log(
    `${dailySummary} It's currently ${temp} degrees out. There is a ${rain}% chance of rain.`
  );
});
