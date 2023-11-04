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

app.get("/", (req, res) => {
    let error = req.query.error;
    res.render("home", { layout: false, error: error });
});

app.post("/get_data", async (req, res) => {
    const link = req.body.link;
    console.log(link);
    const response = await axios.post("http://127.0.0.1:8000/process_data", {
        link: link,
    });
    res.send(response.data);
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
        res.send(response.data);
    } else {
        res.redirect("/?error=Invalid URL");
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
