// Dynamic list array

let GrocList = [];

//Create App name 

let appName = document.createElement('h1');
appName.innerText = 'List App'

document.body.appendChild(appName);

// create Negative button

let clearButton = document.createElement('button')
clearButton.innerHTML = '-';
clearButton.setAttribute('id', 'clearButton');

//Create input field

let input = document.createElement('input');
input.setAttribute('id', 'input');

document.body.appendChild(clearButton);
document.body.appendChild(input)

document.createElement('div');

//Create Plus button 

let buttonPLus = document.createElement('button');
buttonPLus.innerHTML = '+';
buttonPLus.setAttribute('id', 'buttonPlus')
buttonPLus.onclick = 'buttonPlus'

// Append values to DOM

document.body.appendChild(buttonPLus)


//button Plus eventListener

document.getElementById('buttonPlus').addEventListener('click', addList);

function addList(){
    
    let listItem = document.getElementById('input').value
    document.getElementById('input').value = ' '

    // Push the new item into the global array 

    GrocList.push(listItem);

    let newItem = document.createElement('h2');

    newItem.innerHTML = listItem;

    newItem.addEventListener('click', function(){
        newItem.style.textDecoration = 'line-through';
    })

    //clear button eventListener 

    document.getElementById('clearButton').addEventListener('click', function() {
        document.body.removeChild(newItem)
    })

    // display child to the DOM

    document.body.appendChild(newItem);

}
