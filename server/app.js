const express = require('express');

// Create express
const app = express();


// Set up routes
app.get("/", (req, res) => {
    res.send("welcome to the Ice Ceam API");
});

app.get("/cats", (req, res) => {
    res.send("m_^^_m");
});


module.exports = app;