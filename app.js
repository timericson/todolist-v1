//jshint esversion:6


const express = require("express");

const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

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
    listTitle: day,
    newListItems: items
  });

});


app.post("/", function(req, res) {

//console.log(req.body);

let item = req.body.newItem;

if (req.body.list === "Work") {
  workItems.push(item);
  res.redirect("/work");
} else {
  items.push(item);
  res.redirect("/");
}




// items.push(item);
//
//
//   res.redirect("/");


});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems:workItems});
});

app.post("/work", function(req, res){



  let item = req.body.newItem;
 workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
