const express = require("express");
const { engine } = require("express-handlebars");
const cookierParser = require("cookie-parser");
const axios = require("axios");
const { isGitHubUrl } = require("./frontend/helpers/checkGithubLink");

const app = express();
const port = 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(cookierParser());
app.use(express.json());

cookieHistory = [];

app.get("/", (req, res) => {
    let error = req.query.error;
    res.render("home", { layout: false, error: error });
});

app.get("/view_data", async (req, res) => {
    const itemsList = req.cookies.itemsList;
    // console.log(itemsList);
    res.render("action", {
        data: itemsList,
        repo_name: req.cookies.repo_name,
    });
});

// Handle POST request to checking URL
app.post("/api/get_data", async (req, res) => {
    let url = req.body.url; // Assuming the URL is sent in the POST request body
    let format = await isGitHubUrl(url);

    if (format) {
        const response = await axios.post(
            "http://127.0.0.1:8000/process_data",
            {
                link: url,
            }
        );
        // console.log(response.data);
        const data = response.data.data.data;
        const repo_name = response.data.repo_name;
        let itemsList = data.map((data) => ({
            name: data.name,
            description: data.description,
            type: data.type,
            url: data.url,
        }));
        // console.log(itemsList);
        res.cookie("itemsList", itemsList);
        res.cookie("repo_name", repo_name);
        res.redirect("/view_data");
    } else {
        res.redirect("/?error=Invalid URL");
    }
});

app.post("/api/get_sub_data", async (req, res) => {
    let url = req.body.url;
    // console.log(url);
    const response = await axios.post(
        "http://127.0.0.1:8000/process_sub_data",
        {
            link: url,
        }
    );
    // console.log(response.data.data.data);
    const data = response.data.data.data;
    const repo_name = response.data.repo_name.split("?")[0];
    let itemsList = data.map((data) => ({
        name: data.name,
        description: data.description,
        type: data.type,
        url: data.url,
    }));
    // console.log(itemsList);
    res.cookie("itemsList", itemsList);
    res.cookie("repo_name", repo_name);
    res.redirect("/view_data");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
