// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
//const routes = require('./routes');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

// Add routes, both API and View
app.post('/submit-form', (req, res) => {
    const jsonData = req.body;
    console.log('Received JSON data:', jsonData);
    res.send('Data received!');
  });
  

// Start the API server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});