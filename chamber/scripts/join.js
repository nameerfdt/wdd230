// // get current date and time in milliseconds
// let currentDateTime = Date.now();
// // put the current date and time in html
// document.getElementById('currentDateTime').value = currentDate;

// Get a reference to the hidden input field
const currentDateTimeInput = document.getElementById('currentDateTime');

// Get the current date/time in milliseconds
const currentDateTimeMilliseconds = Date.now();

// Set the value of the hidden input field to the current date/time in milliseconds
currentDateTimeInput.value = currentDateTimeMilliseconds.toString();