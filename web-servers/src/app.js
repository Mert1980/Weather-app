const path = require("path"); // path is a core node module, so no need to install it!
const express = require("express"); // express is a function
const hbs = require("hbs");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Set up static directory to serve
app.use(express.static(publicDirectoryPath)); // we pass the return value of express.static function into app.use

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Mert Demirok"
  });

  /* rendering static content with hbs module
  So by calling response.render, express goes off and gets that view. It then
  converts it into HTML and to make sure that HTML gets back to the requester.
  And in this case we've proved that happens by viewing it over in the browser. */
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Mert Demirok"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Mert Demirok",
    message:
      "This is some helpful text"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Address must be provided!"
    });
  }
  geoCode(req.query.address, (error, { latitude, longitude, location }={}) => {
    if (error) {
      return res.send({ error }); // shorthand property used instead of {error: error}
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error }); // shorthand property used 
      }
      res.send({
        address: req.query.address,
        location, // shorthand property used 
        forecast: forecastData
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  // * means, match anything after /help url that hasn't matched so far
  res.render("404", {
    title: "404",
    name: "Mert Demirok",
    errorMessage: "Help article not found"
  });
});

app.get("*", (req, res) => {
  // * means, match anything that hasn't matched so far
  res.render("404", {
    title: "404",
    name: "Mert Demirok",
    errorMessage: "Page not found"
  });
});

app.listen(port, () => {
  console.log(`The server is listening on port number ${port}`);
});
