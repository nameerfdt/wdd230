// declare three const variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.
button.addEventListener('click', () => {
    // check to make sure the input is not blank
    if (input.value != '') {
        // create a li element
        let li = document.createElement('li');
        // create a deliete button
        let deleteButton = document.createElement('button');
        // create variable for input value
        let word = input.value;
        //  create variable to uppercase first letter and lowercase all others
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        // populate the li elements textContent or innerHTML with the input value
        li.textContent = capWord;
        // populate the button textContent with a ❌
        deleteButton.textContent = '❌';
        // append the li element with the delete button
        li.append(deleteButton);
        // append the li element to the unordered list in your HTML
        list.append(li);
        // set input value back to null
        input.value = '';
        // send the focus to the input element
        input.focus();
            // add an event listener to the delete button that removes the li element when clicked
            deleteButton.addEventListener('click', function (){
                list.removeChild(li);
                input.focus();
        input.value = '';
            })
        }
    });
    
// function to allow Enter key to add input to list
input.addEventListener('keydown', function (event){
    if (event.key === 'Enter'){
        event.preventDefault();
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function (){
            list.removeChild(li);
            input.focus();
            input.value = '';
        })    
        let word = input.value;
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        li.textContent = capWord;
        li.appendChild(deleteButton);
        list.append(li);
        input.value = '';
    }
});


