const express = require("express");
const app = express();

const options = {
    index: "myWebPage.html"
}
app.use(express.static("../frontend", options));

app.listen(8080);