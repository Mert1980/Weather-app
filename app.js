const request = require("request");

// const url =
//   "https://api.darksky.net/forecast/04b7a140f48a161bab606bc04471c4fe/37.8267,-122.4233?units=si";

// request({ url: url, json: true }, (error, response) => {
// const data = JSON.parse(response.body)
// console.log(data.currently)
// json:true --> automatically parses JSON string
// console.log(response.body.currently);
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Poorly formatted request");
//   } else {
//     const temp = response.body.currently.temperature;
//     const rain = response.body.currently.precipProbability;
//     const dailySummary = response.body.daily.data[0].summary;
//     console.log(
//       `${dailySummary} It's currently ${temp} degrees out. There is a ${rain}% chance of rain.`
//     );
//   }
// });

// Geocoding
// Address --> Lat/Long --> Weather

// const urlMapbox =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/boutersem.json?access_token=pk.eyJ1IjoibWF0dDE5ODAiLCJhIjoiY2s0anNld2xmMHpoZDNsbnRoaGk0M250dSJ9.5WtKXyPXAsexEUjjFgeqQA&limit=1";

// request({ url: urlMapbox, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services!");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find the location. Please update the search terms!");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(`Lat: ${latitude}, Long:${longitude}`);
//   }
// });

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWF0dDE5ODAiLCJhIjoiY2s0anNld2xmMHpoZDNsbnRoaGk0M250dSJ9.5WtKXyPXAsexEUjjFgeqQA&limit=1`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback(
        "Unable to find the location. Please update the search terms!",
        undefined
      );
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

geoCode("leuven", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});
