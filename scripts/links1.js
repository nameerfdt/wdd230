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

    function displayLinks(data){
        let allLessons = data.lessons;
        const line = document.createElement('li');
        const pizza = '';
        allLessons.forEach(function(allLessons) {
            let lessonNum = allLessons.lesson;
            let lessonUrl = allLessons.links;
            lessonUrl.forEach(function(lessonUrl){
                let url = lessonUrl.url;
                let title = lessonUrl.title;
                const listItem = document.createElement('li')
                const a = document.createElement('a');
                a.href = url;    
                a.textContent = title;

                listItem.appendChild(a.href);

                })
        })

        }
