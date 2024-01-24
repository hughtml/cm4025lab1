const express = require("express");
const app = express();

const options = {
    index: "myWebPage.html"
}
app.use(express.static("../frontend", options));

app.use((req, res, next) => {
    res.status(404).send("This page doesn't exist!");
});

app.listen(8080);