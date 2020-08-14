// Variables
let timeSlots = [{ time: "0900", text: "" }, { time: "1000", text: "" }, { time: "1100", text: "" }, { time: "1200", text: "" }, { time: "1300", text: "" }, { time: "1400", text: "" }, { time: "1500", text: "" }, { time: "1600", text: "" }, { time: "1700", text: "" },]

let currentTime = moment().format("HH");

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// function to plug in current date using moment.js
$("#currentDay").text(moment().format('dddd, MMMM Do'))
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// build time blocks in html, populate them using local storage
for (let i = 0; i < timeSlots.length; i++) {
    let slots = timeSlots[i];
    // grabs only the first 2 digits from the time key
    let slotsHour = slots.time / 100;
    // variables to build all elements and set appropriate attributes
    $row = $("<div>").addClass("row time-block").attr("id", "hour-" + slotsHour);
    $hour = $("<div>").addClass("col-md-1 hour").text(slots.time);
    $input = $("<textarea>").addClass("col-md-10 description").text(slots.text);
    $saveIcon = $("<i>").addClass("far fa-save");
    $save = $("<button>").addClass("col-md-1 btn saveBtn").append($saveIcon);
    // color-codes time slots based on current time
    if (currentTime > slotsHour) {
        $input.addClass("past")
    } else if (currentTime < slotsHour) {
        $input.addClass("future")
    } else if (currentTime == slotsHour) {
        $input.addClass("present")
    }
    // appends cols to row, and row to .container
    $row.append($hour, $input, $save)
    $(".container").append($row)
}

let schedule = localStorage.getItem("storage");
 if(schedule){
     schedule = JSON.parse(schedule);
 } else {
     schedule = {};
 }

$(".saveBtn").on("click", function (e) {
    let val = $(this).siblings("textarea")[0].value.trim();
    let id = $(this).siblings(".hour").text();
    console.log(val);
    console.log(id);
    schedule[id] = val;
    console.log(schedule)
    localStorage.setItem("schedule", JSON.stringify(schedule))
})

// WHEN I click into a timeblock
// THEN I can enter an event
    // USER INPUT -> textarea

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    // USER INPUT -> click event -> pushes to a certain index within an array stored in local storage (JSON stringify/parse)


// WHEN I refresh the page
// THEN the saved events persist