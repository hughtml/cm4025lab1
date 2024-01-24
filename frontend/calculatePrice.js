const calculatePrice = () => {
    const salary = document.getElementById("salary").value || 32800;
    const days = document.getElementById("days").value;

    if (typeof salary === "number" && typeof days === "number") {
        console.log("Calculating price");
        console.log(salary);
        console.log(days);
        let finalPrice = 0;
        dailyRate = salary / 365;
        finalPrice = priceRounder(dailyRate * days);
        document.getElementById("finalPrice").innerHTML = finalPrice;
    } else {
        console.log("Salary type: " + typeof salary);
        console.log("Days type: " + typeof days);
        document.getElementById("finalPrice").innerHTML = "Oops. Please try again and make sure your salary and number of days are both numbers.";
    }
    
}

const priceRounder = (finalPrice) => {
    return Math.round(finalPrice / 100) * 100;
}