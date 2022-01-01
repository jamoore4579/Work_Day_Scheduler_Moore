// Todays date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function() {
    // saveBtn click listener
    $(".saveBtn").on("click", function() {
        // get text from the description field
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save text in local storage
        localStorage.setItem(time, text);
    })

    function scheduler() {
        // determine current time
        var currentTime = moment().hour();

        // loop through time options
        $(".time-block").each(function() {
            var timeSeg = parseInt($(this).attr("id").split("hour")[1]);
            
            // apply correct class per time reference
            if (timeSeg < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeSeg === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present")
            }
            else {
                $(this).removeClass("past")
                $(this).removeClass("Present")
                $(this).addClass("future")
            }
        })
    }

    // retrieve data from local storage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    scheduler();
})


//setInterval(checkTime(), (1000 * 60) * 5);





  

    



