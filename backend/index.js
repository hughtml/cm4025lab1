const express = require("express");
const { MongoClient } = require("mongodb");
const uri = "mongodb://testUser:password124@127.0.0.1:27017/mydb";
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

app.get("/savequote", function(req, res) {
    const salary = req.query.salary;
    const days = req.query.days;
    const quoteName = req.query.quotename;

    console.log("Calculating price");
    console.log(salary);
    console.log(days);
    const dailyRate = salary / 365;

    let finalPrice = dailyRate * days;
    finalPrice = priceRounder(finalPrice);

    console.log(quoteName + " saved: £" + finalPrice + " for £" + salary + " for " + days + " days");

    const client = new MongoClient(uri);
    async function run() {
        try {
            //Await a client connection to the server
            await client.connect();
            //Establish and verfiy a connection
            await client.db("admin").command({ping: 1});
            console.log("Success! Connected to the server.");
            console.log("Starting database procedures...");
            
            //----- Database queries -----

            const dbo = client.db("mydb");
            const paramsObj = {
                quoteName: quoteName,
                salary: salary,
                days: days,
                finalPrice: finalPrice
            };

            await dbo.collection("quotes").insertOne(paramsObj, (err, res) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log("Quote inserted.");
            });

            //----- Database queries -----

            console.log("...finishing database procedures.");
        } finally {
            //Client must close no matter finish or error
            await client.close();
        }
    }

    run().catch(console.dir);
    res.send("Quote saved successfully.");
});

app.use(express.static("../frontend", options));

app.use((req, res, next) => {
    res.status(404).send("This page doesn't exist!");
});

app.listen(8080);