// Todays date
$("#currentDay").text(moment().format("dddd, MMMM Do"));


// determine if past, present or future
var checkTime = function() {
    var hour = $(".hour").text().trim();

    var time = moment(hour, "LT");
    
    // emove any old classes from element
    $(".hour").removeClass(".present .past .future");

    // apply new class if time is past/future time
    if (moment().isAfter(time)) {
        $(".hour").addClass(".past");
    } else if (moment().isBefore(time)) {
        $(".hour").addClass(".future");
    } else {
        $(".hour").addClass(".present");
    }
}

checkTime();





  

    



