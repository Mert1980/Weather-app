const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");

const address = process.argv[2];
if (!address) {
  console.log("Please provide an address!");
} else {
  geoCode(address, (error, {latitude, longitude, location}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(chalk.inverse(location));
      console.log(forecastData);
    });
  });
}
