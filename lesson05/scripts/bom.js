const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const ul = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        let word = input.value;
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        li.textContent = capWord;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        ul.append(li);
        input.value = '';
        input.focus();
            deleteButton.addEventListener('click', function (){
                ul.removeChild(li);
                input.focus();
        input.value = '';
            })
        }
    });


input.addEventListener('keydown', function (event){
    if (event.key === 'Enter'){
        event.preventDefault();
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function (){
            ul.removeChild(li);
            input.focus();
            input.value = '';
        })    
        let word = input.value;
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        li.textContent = capWord;
        li.appendChild(deleteButton);
        ul.append(li);
        input.value = '';
    }
});


