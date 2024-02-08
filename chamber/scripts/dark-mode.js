const modeButton = document.querySelector("#dark-mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
// const section = document.querySelector("section");
const weather = document.querySelector("#weather");

// const mainsection = document.querySelector("main > section");


modeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode");
    section.classList.toggle("dark-mode");
    weather.classList.toggle("dark-mode");
    // mainsection.classList.toggle("dark-mode");
});