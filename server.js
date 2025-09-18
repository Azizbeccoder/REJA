// console.log("Web serverni boshlash");
// const express = require('express');
// const app = express();
// const http = require('http');

// // 1. Middleware
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 2. Views setup
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 3. Routes
// app.get("/", function(req, res) {
//     res.end('HELLO WORLD');
// });

// // 4. Server
// const server = http.createServer(app);
// const PORT = 3000;
// server.listen(PORT, function() {
//     console.log(`The server is running successfully on port: ${PORT}`);
// });
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static("public"));

// EJS setup
app.set("views", "views");
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => res.send("Welcome Home!"));
app.get("/harid", (req, res) => {
    res.render("harid");  // just the name
});  // Render harid.ejs


app.post("/create-item", (req, res) => {
    console.log(req.body.item);  // log the input
    res.json("/harid");      // 
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
