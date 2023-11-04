// Import necessary modules
const sqlite3 = require("sqlite3"); // Import SQLite3 library for SQLite database operations
const sqlite = require("sqlite"); // Import SQLite library for interfacing with SQLite database
const express = require("express"); // Import Express.js web framework
const { engine } = require("express-handlebars"); // Import the engine function from express-handlebars for rendering views
const cookierParser = require("cookie-parser"); // Import cookie-parser for parsing cookies

// Import functions from the "./helpers/db" module
const {
    isGitHubUrl,
} = require("./checkGithubLink.js");

const path = require("path"); // Import path module for working with file and directory paths

const app = express(); // Initialize the Express application
const port = 3000; // Set the server port to 3000

// Configure the Express app
app.engine("handlebars", engine()); // Set the view engine to handlebars
app.set("view engine", "handlebars"); // Set handlebars as the view engine
app.set("views", __dirname + "/views"); // Set the directory for views

app.use("/static", express.static(__dirname + "/static")); // Serve static files from the "static" directory
app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies in a URL-encoded format
app.use(cookierParser()); // Use cookie-parser middleware to parse cookies

// Handle GET request to the root route
app.get("/", (req, res) => {
    let error = req.query.error; // Get error query parameter, if any
    res.render("home", { layout: false, error: error }); // Render the "home" view and pass the error value
});



// Handle POST request to checking URL
app.post("/api/check-github-url", async (req, res) => {
    let urlToCheck = req.body.url; // Assuming the URL is sent in the POST request body
    let url = await isGitHubUrl(urlToCheck);

    if (url) {
        res.cookie("url", url); // Set a cookie with the username
        res.redirect("/"); // Redirect to the tasks route upon successful login
    } else {
        res.redirect("/?error=Invalid url")
    }
});


// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`); // Log the server's listening status
});
