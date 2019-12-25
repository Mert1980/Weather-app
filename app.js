const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");

const address = process.argv[2];
if (!address) {
  console.log("Please provide an address!");
} else {
  geoCode(command, (error, geoData) => {
    if (error) {
      return console.log(error);
    }
    forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(chalk.inverse(geoData.location));
      console.log(forecastData);
    });
  });
}
