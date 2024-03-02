// 2. declare a const variable names url that contains the URL string of the JSON resource provided
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

// 3. declare a const variable named "cards" that selects the HTML div element from the document with an id value of "cards"
const cards = document.querySelector('#cards');

// 4. create an async defined function named "getProphetData" to fetch data from the JSON source URL using the await fetch() method
async function getProphetData() {
    // 5. store the response from the fetch[] method in a const variable named "response"
    const response = await fetch(url);
    // 6. convert the response to a JSON object using the .json method and store the results in a const variable named "data"
    const data = await response.json();
    // 7. add a console.table() expression method to check the data response at this point in the console window. this is temporary testing of the data retreival. test and check results in devtools. comment out when successful test. 
    // console.table(data.prophets);
    // 10. added this line after successful test to call a function named "displayProphets" and include the "data.prophets" argument. The displayProphets() function expects an array parameter.
    displayProphets(data.prophets);
}
    // 8. call the function getProphetData()in the main line of your js code to test the fetch and response
    getProphetData();

// 11. define a function expression named "displayProphets" that handles a single parameter named "prophets" somewhere in your js file. Use an arrow expression to contain statements that will process the parameter value and build a card for each prophet.
const displayProphets = (prophets) => {
    // card build code goes here
    // 12. inside the function, use a forEach loop with the array parameter to process each "prophet" record one at a time, creating a new card each time. 
    prophets.forEach((prophet) => {
        // 13. inside the html card building loop, do the following:
        // 13.1. create a section element and store it in a variable named "card" using createElement()
        const card = document.createElement('section');
        // 13.2. create an h2 element and store it in a variable named "fullName"
        const fullName = document.createElement('h2');
        // 13.3. create an img element and store it in a variable named "portrait"
        const portrait = document.createElement('img');
        // 13.4. populate the heading element with the prophet's full name using a template string to build the full name extracted from the json file
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        // 13.5. build the image element by setting the src, alt, loading, width, and height attributes using setAttribute()
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        // 13.6. using appendChild() on the section element named "card" add the heading and image elements one at a time. 
        card.appendChild(fullName);
        card.appendChild(portrait);
        // 13.7. finally add the section card to the "cards" div that was selected at the beginning of the script file
        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}