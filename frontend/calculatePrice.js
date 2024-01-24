const calculatePrice = () => {
    const salary = document.getElementById("salary").value || 32800;
    const days = document.getElementById("days").value;
    console.log("Calculating price");
    console.log(salary);
    console.log(days);
    let finalPrice = 0;
    dailyRate = salary / 365;
    finalPrice = dailyRate * days;
    document.getElementById("finalPrice").innerHTML = finalPrice;
}

const priceRounder = (finalPrice) => {
    return Math.round(finalPrice / 100) * 100;
}