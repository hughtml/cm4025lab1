const calculatePrice = () => {
    let salary = document.getElementById("salary").value;
    let days = document.getElementById("days").value;
    console.log("Calculating price")
    console.log(salary)
    console.log(days)
    let finalPrice = 0;
    dailyRate = salary / 365;
    finalPrice = dailyRate * days;
    document.getElementById("finalPrice").innerHTML = finalPrice;
}