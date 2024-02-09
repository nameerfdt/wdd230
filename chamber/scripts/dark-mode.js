// const modeButton = document.querySelector("#dark-mode");
// const body = document.querySelector("body");
// const main = document.querySelector("main");
// // const events = document.querySelector ('#events');
// // const weather = document.querySelector('#weather');
// // const spotlights = document.querySelector('.chamber-member');
// // const header = document.querySelector('#hero-box');


// modeButton.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");
//     main.classList.toggle("dark-mode");
// });


const mainElement = document.querySelector('main');
// Select all elements within the main element
const allElementsInMain = mainElement.querySelectorAll('*');

// Iterate over each element within the main element using forEach
allElementsInMain.forEach(element => {
    // Change the background color of each element
    element.style.backgroundColor = 'black';
	element.style.color = 'white';
	});





