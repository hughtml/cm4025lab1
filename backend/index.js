const express = require("express");
const app = express();

const options = {
    index: "myWebPage.html"
}

const priceRounder = (finalPrice) => {
    return Math.round(finalPrice / 100) * 100;
}

app.get("/getprice", (req, res) => {
    const salary = req.params.salary;
    const days = req.params.days;

    console.log("Calculating price");
    console.log(salary);
    console.log(days);
    const dailyRate = salary / 365;

    const finalPrice = priceRounder(dailyRate * days);
    res.send(finalPrice);
});

app.use(express.static("../frontend", options));

app.use((req, res, next) => {
    res.status(404).send("This page doesn't exist!");
});

app.listen(8080);