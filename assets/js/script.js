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
        console.log(currentTime)

        // loop through time options
        $(".time-block").each(function() {
            var timeSeg = parseInt($(this).attr("id").split("hour")[1]);
            console.log(timeSeg)

            // apply correct class per time reference
            if (timeSeg < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeSeg === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    // retrieve data from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    scheduler();
})


//setInterval(checkTime(), (1000 * 60) * 5);





  

    



