// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    // function to plug in current date using moment.js

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    // build time blocks in html, populate them using local storage

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // if timeblock time HOURS (first two digits using military time) is < current time HOURS (first two digits of current time), color code gray
    // if timeblock hours === current hours, color code red
    // if timeblock hours > current hours, color code green

// WHEN I click into a timeblock
// THEN I can enter an event
    // USER INPUT -> textbox

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    // USER INPUT -> click event -> pushes to a certain index within an array stored in local storage (JSON stringify/parse)
        // variable timeSlots = [{time:"9AM", text:"User Input"}, {time:"10AM", text:"User Input"}]

// WHEN I refresh the page
// THEN the saved events persist