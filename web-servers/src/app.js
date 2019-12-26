const path = require('path') // path is a core node module, so no need to install it!
const express = require("express"); // express is a function

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath))
// we pass the return value of express.static function into app.use

app.get("/weather", (req, res) => {
  res.send({
    location: "Leuven",
    forecast: "It is 5 degrees and 5% chance of rain"
  });
});

app.listen(3000, () => {
  console.log(`The server is listening on port number 3000`);
});
