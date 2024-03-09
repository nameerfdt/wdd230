
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector('#listBtn');
const display = document.querySelector('memberCards');

gridBtn.addEventListener("click", () => {
    display.classList.add('gridBtn');
    display.classList.remove('listBtn');
});

listBtn.addEventListener("click", () => {
    display.classList.add('listBtn');
    display.classList.remove('gridBtn');
});
