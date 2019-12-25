const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geoCode("leuven", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});

forecast(-15.7888, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
