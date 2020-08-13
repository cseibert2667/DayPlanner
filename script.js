// Variables
let timeSlots = [{time:"0900", text:""}, {time:"1000", text:""}, {time:"1100", text:""}, {time:"1200", text:""}, {time:"1300", text:""}, {time:"1400", text:""}, {time:"1500", text:""}, {time:"1600", text:""}, {time:"1700", text:""}, ]
let currentTime = moment().format("HH")
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    // function to plug in current date using moment.js
$("#currentDay").text(moment().format('dddd, MMMM Do'))
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    // build time blocks in html, populate them using local storage
    for (let i = 0; i < timeSlots.length; i++) {
        let slots = timeSlots[i];
        let slotsHour = slots.time / 100
        let $row = $("<div>").addClass("row")
        let $hour = $("<div>").addClass("col-1 hour").text(slots.time)
        let $input = $("<textarea>").addClass("col-10 description").text(slots.text)
        let $saveIcon = $("<i>").addClass("far fa-save")
        // WHEN I view the timeblocks for that day
        // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
            if (currentTime > slotsHour) {
            $input.addClass("past")
            } else if (currentTime < slotsHour) {
            $input.addClass("future")
            } else if (currentTime == slotsHour) {
            $input.addClass("present")
            }
        let $save = $("<button>")
        $($save).addClass("col-1 saveBtn").append($saveIcon)
        $row.append($hour, $input, $save)
        $(".time-block").append($row)
    }


// WHEN I click into a timeblock
// THEN I can enter an event
    // USER INPUT -> textbox

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    // USER INPUT -> click event -> pushes to a certain index within an array stored in local storage (JSON stringify/parse)
        

// WHEN I refresh the page
// THEN the saved events persist