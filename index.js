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
        res.redirect("/get_data"); // Redirect to the tasks route upon successful login
    } else {
        res.redirect("/?error=Invalid url")
    }
});



app.get("/get_data", (req, res) => {
    // Dummy data
    const Data = [
        {"name": "SmileScore", "description": "Module to quantify smile."},
        {"name": "animations", "description": "Module to create video animation."},
        {"name": "face_reg", "description": "Module for face detection and video reading."},
        {"name": "flaskapp", "description": "Module containing Flask app for the Beauty Moment Synthesis API."},
        {"name": "misc", "description": "Module with various utility scripts for data extraction and visualization."},
        {"name": "model", "description": "Module holding the main model script."},
        {"name": "README.md", "description": "Readme file explaining the project and its structure."},
        {"name": "config.py", "description": "Configuration file."},
        {"name": "SDD-FIQA.py", "description": "Script for face image quality assessment."},
        {"name": "main.py", "description": "Main script for the project."},
        {"name": "requirements.txt", "description": "File containing required dependencies for the project."},
        {"name": "results", "description": "Folder for storing project results."},
        {"name": "test", "description": "Folder for project testing."}
    ]
    

    // Transform the films JSON data to the format needed for the view
    let List = Data.map((data) => ({
        name: data.name,
        description: data.description
    }));

    // Render the "films" view, passing the actor and films list to the template
    res.render("action", {
        data: List
    });
});




// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`); // Log the server's listening status
});
