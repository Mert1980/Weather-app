const request = require("request");
const chalk = require("chalk");

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/04b7a140f48a161bab606bc04471c4fe/${longitude},${latitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Poorly formatted request", undefined);
    } else {
      const temp = body.currently.temperature;
      const rain = body.currently.precipProbability;
      const dailySummary = body.daily.data[0].summary;
      callback(
        undefined,
        `${dailySummary} It's currently ${temp} Celcius degrees out. There is a ${rain} chance of rain.`
      );
    }
  });
};

module.exports = forecast;
