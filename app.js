const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const port = process.env.PORT || 3000;

const app = express();


app.set("view engine", "ejs");
// app.use(bodyParser.json({
//     extended: true
// }));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req, res){
    res.render("startingPage");
});

app.get("/homepage", function(req, res){
    res.render("homePage");
});

app.get("/aboutPage", function(req, res){
    res.render("aboutPage");
});

app.get("/projectPage", function(req, res){
    res.render("projectPage");
});


app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});