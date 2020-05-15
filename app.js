//jshint esversion:6


const express = require("express");

const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {


  let date = new Date();
  // var today = date.getDay();
  // var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // var day = week[today];

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = date.toLocaleDateString("en-US", options);




  res.render("list", {
    dayOfTheWeek: day,
    newListItems: items
  });

});


app.post("/", function(req, res) {

  let item = req.body.newItem;

items.push(item);


  res.redirect("/");


});




app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
