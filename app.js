const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require('chalk');

geoCode("balikesir", (error, geoData) => {
  if (error){
    return console.log(error)
  }
  forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
    if (error){
      return console.log(error)
    }
    console.log(chalk.inverse(geoData.location));
    console.log(forecastData);
  });
});


