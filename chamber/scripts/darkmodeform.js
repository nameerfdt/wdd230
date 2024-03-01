// When you use element.style.backgroundColor, it only retrieves the inline style of the element, not any styles applied through CSS. Therefore, if you set the background color using JavaScript (inline style), this condition will work as expected. But if the background color is set using a CSS rule, this condition won't work properly because it won't detect the CSS-applied background color.



// select the toggle element ID and assign variable named dark
// this is the element I want to add a click event listener to.
const dark = document.getElementById("darkmode");

// add event click listener dark
dark.addEventListener('click', function() {
    // code to be executed when dark is clicked
    // select all elements with the class of membership
    const memLevels = document.querySelectorAll(".membership");
    // for each class membership, toggle the background color
    memLevels.forEach(function(element){
        // element.addEventListener('click', function(){
            if (element.style.backgroundColor === 'black') {
                element.style.backgroundColor = 'pink';
            } else {
                element.style.backgroundColor = 'black'
                    }
            });
        });
    ;

//========================== 

// // select all elements with the class of membership
// const memLevels = document.querySelectorAll(".membership");

// if (toggleDark.click) {
// // iterate over each .membership element using forEach
// memLevels.forEach(function(element){
//     element.addEventListener('click', function(){
//         if (element.style.backgroundColor === 'black') {
//             element.style.backgroundColor = '';
//         } else {
//             element.style.backgroundColor = 'black'
//             }
//         });
//     });
// };


// This will select all elements with class of membership and turn to black

    // // select all elements with the class of membership
    // const elements = document.querySelectorAll(".membership");

    // // iterate over each .membership element using forEach
    // elements.forEach(function(element){
    //     element.style.backgroundColor = 'black';
    //     element.style.color = 'white';    
    // });

  