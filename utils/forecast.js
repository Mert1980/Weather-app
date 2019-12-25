const request = require("request");
const url =
  "https://api.darksky.net/forecast/04b7a140f48a161bab606bc04471c4fe/37.8267,-122.4233?units=si";

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/04b7a140f48a161bab606bc04471c4fe/${longitude},${latitude}?units=si`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Poorly formatted request", undefined);
    } else {
      const temp = response.body.currently.temperature;
      const rain = response.body.currently.precipProbability;
      const dailySummary = response.body.daily.data[0].summary;
      callback(
        undefined,
        `${dailySummary} It's currently ${temp} Celcius degrees out. There is a ${rain}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
