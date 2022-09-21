const express = require('express');

const app = express();

app.listen(process.env.PORT || 3000, (req, res)=>{
    console.log("Listening on port 3000");
});

app.get("/", (req, res)=>{
    res.send("work has been started");
});