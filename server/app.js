const express = require('express');
const data = require('./data');
// Create express
const app = express();


// Set up routes
app.get("/", (req, res) => {
    res.send("welcome to the Ice Ceam API");
});

app.get("/flavours", (req, res) => {
    let flavours = data;
    
    if (req.query.vegan) {
        flavours = flavours.filter(f => f["vegan"])
    }
    res.json({
        flavours: flavours.map(f => f.flavour)
    });
});

app.get("/flavours/:id", (req, res) => {
    const id = req.params.id;
    const filteredData = data.filter(f => f["id"] == id)

    // Handle errors
    if (filteredData.length == 1) {
        res.json({
            flavour: filteredData[0]
        })
    } else {
        res.status(404).json({
            error: "No such ice cream"
        })
    }


});


module.exports = app;                                                  