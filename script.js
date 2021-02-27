// declaring + appending the current date using moment.js
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// using moment to check the current time
var currentTime = moment().format('H');
console.log(currentTime);

// make for loop to create planner rows
for ( let i=9 ; i < 18 ; i++ ){
    //declaring + appending container element + the planner's rows,
    var container = $('.container')
    var plannerRow = $('<div>');
    plannerRow.addClass('row');
    plannerRow.attr('id', ( i + ":00" ));
    plannerRow.appendTo(container);
    
    //adding the times to each row
    var plannerTime = $('<p>');
    plannerTime.addClass('hour')
    plannerTime.appendTo(plannerRow);
    if (i < 13){
        plannerTime.text(i + ":00 am");
    } 
    else    {
        plannerTime.text((i - 12) + ":00 pm");
    }

    // adding the textarea 
    var textArea = $('<textarea>');
    textArea.text('');
    textArea.appendTo(plannerRow);
    // sorting the textarea row's classes/colors by time of day
    if (currentTime > i){
        textArea.addClass('past');
    }
    else if (currentTime < i ) {
        textArea.addClass('future');
    }
    else {
        textArea.addClass('present');
    } 

    // adding the save button
    var saveBtn = $('<button>');
    saveBtn.addClass('saveBtn');
    saveBtn.appendTo(plannerRow);
    // font awesome save symbol
    var saveSymbol = $('<i>');
    saveSymbol.addClass('fas fa-save');
    saveSymbol.appendTo(saveBtn);

}
// add save button listener w/ local storage
saveBtn.on('click', function(){
    
});


// on page load, pull data from local storage (if there is data in local storage)

