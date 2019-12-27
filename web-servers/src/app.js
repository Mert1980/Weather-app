const path = require('path') // path is a core node module, so no need to install it!
const express = require("express"); // express is a function

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath))
// we pass the return value of express.static function into app.use

app.get('', (req, res)=>{
  res.render('index', {
    title: 'Weather',
    name: 'Mert Demirok'
  }); 
  
  /* rendering static content with hbs module
  So by calling response.render, express goes off and gets that view. It then
  converts it into HTML and to make sure that HTML gets back to the requester.
  And in this case we've proved that happens by viewing it over in the browser. */
})

app.get('/about', (req, res)=>{
  res.render('about', {
    title: 'About Me',
    name: 'Mert Demirok'
  }); 
});

app.get('/help', (req, res)=>{
  res.render('help', {
    title: 'Help',
    message: 'Please submit the form below to reach out help from our support centre'
  }); 
});

app.get("/weather", (req, res) => {
  res.send({
    location: "Leuven",
    forecast: "It is 5 degrees and 5% chance of rain"
  });
});

app.listen(3000, () => {
  console.log(`The server is listening on port number 3000`);
});
