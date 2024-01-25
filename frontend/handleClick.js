$(function() {
    const handleClick = () => {
        const salary = $("#salary").val();
        const days = $("#days").val();
        const url = "/getprice?" + "salary=" + salary + "&" + "days=" + days;
        console.log(url);

        $.ajax({
            url: url,
            success: function (finalPrice) {
                document.getElementById("finalPrice").innerHTML = finalPrice;
            }
        });
    }

    $("#submit").click(handleClick);
});