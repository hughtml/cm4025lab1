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
    
    const saveClick = () => {
        const salary = $("#salary").val();
        const days = $("#days").val();
        const quoteName = $("#quoteName");
        const url = "/saveQuote?" + "salary=" + salary + "&" + "days=" + days + "&" + "quoteName=" + quoteName;
        console.log(url);

        $.ajax({
            url: url,
            success: function (saveMessage) {
                document.getElementById("saveMessage").innerHTML = saveMessage;
            }
        });
    }

    $("#submit").click(handleClick);
    $("#save").click(saveClick);
});