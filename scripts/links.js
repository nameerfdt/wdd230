// create a baseURl variable that references my root WDD230 repo, GitHub pages URL
const baseURL = "https://nameerfdt.github.io/wdd230/";

// add a variable named linksURl that references your links.json data file
const linksURL = "https://nameerfdt.github.io/wdd230/data/links.json";

// write an asynchronous function to get the links data in the links.json data file. 
async function getAssignLinks() {
    // store response
    const response = await fetch(linksURL);
    // convert response to JSON object and store in variable named data 
    const data = await response.json();
    // expression to test data response that will be removed after testing
    // console.log(data);
    // add a new line of code that calls a function that will build out the available activity links from the data response
    displayLinks(data.lessons);
}   
    // calls the getAssignLinks functions
    getAssignLinks();

// get the id for the unordered list
const activities = document.getElementById("course-links")

// START THIS PUTS THE WEEK NUMBERS ON PAGE

// create displayLinks() function and name the function parmater "weeks". Remember the json data is an array of objects representin weeks of the term. 
// const displayLinks = (weeks) => {
//     // use a loop to process each week using it's "week" string and the "links' object ("url" and "title") to create the output
//     weeks.forEach((week) => {
//         // create a section element with a variable named card
//         const card = document.createElement('section');
//         // create an h4 element for the lesson header
//         const h4 = document.createElement('h4');
//         // create text content for lesson and link variables
//         h4.textContent = `${week.lesson}: `; 
//         card.appendChild(h4);
//         activities.appendChild(card);
//     });
// };

// END

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const card = document.createElement('section');
        const weekNumber = document.createElement('h4');
        weekNumber.textContent = `Week ${week.lesson}`;

        // create unordered list variable to store the lessons objects
        const linkList = document.createElement('ul');
        
        // function to loop through the links array to get url and title
        week.links.forEach((link) => {
            // create list element
            const listItem = document.createElement('li');
            // create anchor element for the url links
            const anchor = document.createElement('a');

            // create text content for the anchor for the JSON title
            anchor.textContent = link.title;
            // set the href attribute for the anchor element and use the JSON url
            anchor.setAttribute('href', link.url);

            // append anchor to the listItem
            listItem.appendChild(anchor);
            // append the listItem to the linkLink
            linkList.appendChild(listItem);
        });
        card.appendChild(weekNumber)
        card.appendChild(linkList);
        activities.appendChild(card);
    });
};