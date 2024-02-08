// declare three const variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const ul = document.querySelector('#list');
// Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.
button.addEventListener('click', () => {
    // check to make sure the input is not blank before doing the following remaining tasks in this list using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.
    if (input.value != '') {
        // create a li element
        const li = document.createElement('li');
        // create a delele button
        const deleteButton = document.createElement('button');
        // create new var for input word 
        const word = input.value;
        // create var for capitalized word make first letter upper and rest of word lower
        const capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        // populate the li elements textContent or innerHTML with the input value the user put in the field
        li.textContent = capWord;
        // populate the button textContent with a ❌
        deleteButton.textContent = '❌';
        // append the li element with the delete button
        li.append(deleteButton);
        // append the li element to the unordered list in your HTML
        ul.append(li);
        // this clear the input value
        input.value = '';
        // this put the cursor back into the input value field
        input.focus();
            // add an event listener to the delete button that removes the li element when clicked
            deleteButton.addEventListener('click', function (){
                ul.removeChild(li);
                input.focus();
                        // send the focus to the input element
        // change the input value to nothing or the empty string to clean up the interface for the user
        input.value = '';
            })

    }

    });

// In the click event function block {...}, do the following:
// check to make sure the input is not blank before doing the following remaining tasks in this list using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.



