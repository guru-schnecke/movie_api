const express = require("express");
morgan = require("morgan");

const app = express();

app.use(morgan("common"));
app.use(express.static("public"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

let topMovies = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    director: "J.K. Rowling"
  },
  {
    title: "Lord of the Rings",
    director: "J.R.R. Tolkien"
  },
  {
    title: "Twilight",
    director: "Stephanie Meyer"
  },
  {
    title: "Twilight",
    director: "Stephanie Meyer"
  },
  {
    title: "Twilight",
    director: "Stephanie Meyer"
  },
  {
    title: "Twilight",
    director: "Stephanie Meyer"
  },
  {
    title: "Twilight",
    director: "Stephanie Meyer"
  },
  {
    title: "Twilight",
    director: "Stephanie Meyer"
  },
  {
    title: "Twilight",
    director: "Stephanie Meyer"
  },
  {
    title: "Twilight",
    director: "Stephanie Meyer"
  }
];

// GET requests
app.get("/", (req, res) => {
  res.send("Welcome to my movie club!");
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
