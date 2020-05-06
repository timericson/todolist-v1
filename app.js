//jshint esversion:6


const express = require("express");
// const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {


  var date = new Date();
  var today = date.getDay();

  switch (today) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  if (today === 6 || today === 0) {

    res.send("<h1>Yay It's the weekend</h1>");


  } else {

    res.sendFile(__dirname + "/index.html");

// // res.write allows us to send multiple lines of code
//     res.write("<h1>It's still " + day + " i've gotta work damm!!</h1>");
//     res.write("<h1>Bollocks!!</h1>");
//
//     // res.send will end the transmission

  }







});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
