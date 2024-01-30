const express = require("express");
const app = express();

const priceRounder = (finalPrice) => {
    return Math.round(finalPrice / 100) * 100;
}

const options = {
    index: "myWebPage.html"
}

app.get("/getprice", function(req, res) {
    const salary = req.query.salary;
    const days = req.query.days;

    console.log("Calculating price");
    console.log(salary);
    console.log(days);
    const dailyRate = salary / 365;

    let finalPrice = dailyRate * days;
    finalPrice = priceRounder(finalPrice);
    res.send(""+finalPrice);
});

app.use(express.static("../frontend", options));

app.use((req, res, next) => {
    res.status(404).send("This page doesn't exist!");
});

app.listen(8080);