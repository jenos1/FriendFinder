var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = process.env.PORT || 8080;

// Creates an Express application.
var app = express();

app.get("/", function(req,res){
  // GET request using res.sendFile method to send the static HTML file in response.
  res.sendFile(__dirname + "/public/home.html");
});

// Add Node.js parser configuration. Parse incoming request bodies in a middleware before your handlers, available under the req.body property. Used to get the form data to be available in req.body. App.use defines middleware. 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

// require('./app/routing/htmlRoutes.js')(app);


// Starts server.
app.listen(PORT,function(){
  console.log("Listening on port " + PORT);
});