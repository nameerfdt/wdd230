document.addEventListener('DOMContentLoaded', function() {
    const modeButton = document.querySelector("#darkmodeBtn");
    const body = document.querySelector("body");
    const main = document.querySelector("main");

    modeButton.addEventListener("click", () => {
        body.classList.toggle('darkmode');
        main.classList.toggle('darkmode');
    });

    // create var for all elements with the class of sections and links
    const elements = document.querySelectorAll(".sections");
    const links = document.querySelectorAll(".links");
    let isDarkMode = false;

    // if the dark mode button is clicked
    modeButton.addEventListener("click", () => {
        if (!isDarkMode) {
    // iterate over each section element to change the background, color, and border
        elements.forEach(function(element){
            element.style.backgroundColor = 'black';
            element.style.color = 'white'; 
            element.style.border = '1px solid white'; 
            });
            isDarkMode = true;

    // iterated over each a.link element to change to color to white
        links.forEach(function(element){
            element.style.color = 'white';
        });   
        isDarkMode = true;
    // else style each with original styling 
        } else {
            elements.forEach(function(element){
                element.style.backgroundColor = '';
                element.style.color = '';
                element.style.border = '';  
            });
            isDarkMode = false;

            links.forEach(function(element){
                element.style.color = '';
            });
        }
    })
});
