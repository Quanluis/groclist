//Create Canvas
let canvas = document.getElementById('canvas');

//Create App name 

let appName = document.createElement('h1');
appName.innerText = 'List App'

document.body.appendChild(appName);

//Create input field

let input = document.createElement('input');
input.setAttribute('id', 'input');

document.body.appendChild(input)

document.createElement('div');

//Create Plus button 

let buttonPLus = document.createElement('button');
buttonPLus.innerHTML = '+';
buttonPLus.setAttribute('id', 'buttonPlus')
buttonPLus.onclick = 'buttonPlus'

document.body.appendChild(buttonPLus)

document.getElementById('buttonPlus').addEventListener('click', addList);


document.createElement('div');

// Add to list function

function addList(){
    let listItem = document.getElementById('input').value;
    
    let newitem = document.createElement('h2');
    newitem.innerHTML = listItem;

    //Create a negative button

    let buttonNegative = document.createElement('button')
    buttonNegative.innerHTML = '-';
    buttonNegative.setAttribute('id', 'buttonNegative');

    document.body.appendChild(newitem);
    document.body.appendChild(buttonNegative);


    document.getElementById('buttonNegative').addEventListener('click', deleteList);

    function deleteList(){
    document.body.removeChild(newitem);
    document.body.removeChild(buttonNegative);
    console.log('this works');
    }

}

