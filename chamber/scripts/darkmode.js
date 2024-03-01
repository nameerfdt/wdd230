const modeButton = document.querySelector("#darkmode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const events = document.querySelector("#events");
const weather = document.querySelector("#weather");
const spot1 = document.querySelector("#spotlight1");
const spot2 = document.querySelector("#spotlight2");
const spot3 = document.querySelector("#spotlight3");

modeButton.addEventListener("click", () => {
    body.classList.toggle('darkmode');
    main.classList.toggle('darkmode');
    events.classList.toggle('darkmode');
    weather.classList.toggle('darkmode');
    spot1.classList.toggle('darkmode');
    spot2.classList.toggle('darkmode');
    spot3.classList.toggle('darkmode');
});

// // if I add this, when I click darkmode, all turns durk, if I click dark mode again, it keeps the sections black

// // select all elements with the class of membership
// const elements = document.querySelectorAll(".membership");

// modeButton.addEventListener("click", () => {
// // iterate over each element using forEach
// elements.forEach(function(element){
//     element.style.backgroundColor = 'black';
//     element.style.color = 'white';    
// });

// });

// THIS WILL CHANGE TO DARKMODE AND CHANGE BACK TO ORIGINAL WHEN CLICKED FOR THE JOIN PAGE

// select all elements with the class of membership
const elements = document.querySelectorAll(".membership");
let isDarkMode = false;

modeButton.addEventListener("click", () => {
    if (!isDarkMode) {
// iterate over each element using forEach
elements.forEach(function(element){
    element.style.backgroundColor = 'black';
    element.style.color = 'white';   
    });
    isDarkMode = true;
} else {
    elements.forEach(function(element){
        element.style.backgroundColor = '';
        element.style.color = '';   
});
isDarkMode = false;
}
});