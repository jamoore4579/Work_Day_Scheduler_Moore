// Todays date
$("#currentDay").text(moment().format("dddd, MMMM Do"));


//TODO: Verify class are being added correctly

// determine if past, present or future
var checkTime = function() {

    // set current time
    var time = moment().subtract(14, 'H').format('H')
    console.log(time)

    // identify elements with class "textarea"
    var taskDesc = $("textarea");


    // loop through past, present, future
    for (var i = 0; i < taskDesc.length; i++) {

        // set the element ID as a string
        var elementID = taskDesc[i].id;
        console.log(elementID)

        //get element by ID
        var newID = document.getElementById(taskDesc[i].id)
        console.log(newID)

        // remove any old classes from element
        $(taskDesc[i].id).removeClass(".present .past .future");

        // apply new class if time is past/future time
        if (elementID < time) {
            $(newID).addClass(".past");
        } else if (elementID > time) {
            $(newID).addClass(".future");
        } else {
            $(newID).addClass(".present");
        }
    }
    
}

setInterval(checkTime(), (1000 * 60) * 5);





  

    



