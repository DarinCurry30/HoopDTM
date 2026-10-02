const http = require("http");
const fs = require("fs");
const path = require("path");
const teams = require("../teams");

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    // =========================
    // TEAM API
    // =========================

    if (req.url.startsWith("/api/teams/")) {

        const slug = req.url.split("/api/teams/")[1];
        const team = teams[slug];

        if (!team) {
            res.writeHead(404, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                error: "Team not found"
            }));

            return;
        }

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(team));

        return;
    }


    // =========================
    // WEBSITE FILES
    // =========================

    let filePath;

    if (req.url === "/") {
        filePath = path.join(__dirname, "..", "index.html");
    } else {
        filePath = path.join(__dirname, "..", req.url);
    }

    const extension = path.extname(filePath).toLowerCase();

    const contentTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".svg": "image/svg+xml",
        ".ico": "image/x-icon"
    };

    const contentType =
        contentTypes[extension] || "application/octet-stream";


    fs.readFile(filePath, (error, data) => {

        if (error) {

            res.writeHead(404, {
                "Content-Type": "text/plain"
            });

            res.end("File not found");

            return;
        }

        res.writeHead(200, {
            "Content-Type": contentType
        });

        res.end(data);
    });

});


server.listen(3000, () => {
    console.log("Hoop DTM server running at http://localhost:3000");
});