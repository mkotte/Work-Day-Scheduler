// declaring + appending the current date using moment.js
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay); 

// make for loop to create planner rows
for ( let i=9 ; i < 18 ; i++ ){
    //declaring + appending container element + the planner's rows,
    var container = $('.container')
    var plannerRow = $('<div>');
    plannerRow.addClass('row');
    plannerRow.attr('id', ( i + ":00" ))
    plannerRow.appendTo(container)
    
    //adding the time, textarea + save button

}
// add save button listener w/ local storage

// create function where color coincides with time of day

// on page load, pull data from local storage (if there is data in local storage)

