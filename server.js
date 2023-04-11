const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const handleResumeFormData = require('./core/handleResumeFormData');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// Add routes, both API and View
app.post('/submit-form', (req, res) => {
  const jsonData = req.body;
  res.status(200).send(handleResumeFormData(jsonData));
});

process.on('uncaughtException', function (err) {
  console.log(err);
});

// Start the API server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});