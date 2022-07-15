const express = require('express');

// Create express
const app = express();


// Set up routes
app.get("/", (req, res) => {
    res.send("welcome to the Ice Ceam API");
});

app.get("/flavours", (req, res) => {
    res.json({
        flavours: ["strawberry, chocolate, vanilla"]
    });
});


module.exports = app;