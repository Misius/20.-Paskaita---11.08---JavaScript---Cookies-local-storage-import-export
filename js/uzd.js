'use strict';
console.log('uzd.js');



const nameInputEl = document.getElementById('nameInput');
const nameChangeBtnEl = document.getElementById('nameChangeBtn');

initNames();
initBackground();

nameChangeBtnEl.addEventListener('click', () => {
  console.log('click');
  const inputElValue = nameInputEl.value.trim();
  // add to local storage as name
  localStorage.setItem('name', inputElValue);
  // add name to h1
  addNameToH1(inputElValue);
  // add name to title
  addNameToTitle(inputElValue);
});

function addNameToH1(newName){
  document.querySelector('h1').textContent = newName;
}
function addNameToTitle(newName) {
  document.title = newName;
};


// Puslapiui is naujo uzsikrovus patikrinti ar turim reiksme localstorage, jei turim ja irasom i dokutmento title ir h1 elementa.

function initNames() {
  const foundName = localStorage.getItem('name');
  if (foundName !== null) {
    addNameToH1(foundName);
    addNameToTitle(foundName);
  }
}



// 2uzd selevt colors =====================================================================================

const selectEl = document.getElementById('colorSelector');

const colors = ['tomato','blue','green','yellow'];
const makeOneOpt = (optionName,father) => {
  
  const optEl = document.createElement('option');
  optEl.value = optionName;
  optEl.textContent = optionName;
  console.log('optEl ===', optEl);
  father.append(optEl);
}
// makeOneOpt('tomato', document.body);

// / dinamiskai generuojam opt pasirinkimus select elemente
colors.forEach((color) => makeOneOpt(color,selectEl));

// sekti pasirinkima, kai vyksta pasirinkimas norim nudazyti background color pasirinkta spalva (value)

selectEl.addEventListener('change', (event) => {
  const selectElValue = selectEl.value.trim();
  localStorage.setItem('color',selectElValue);
  // gauti pasirinkimo reiksme
  console.log(selectEl.value);
  // console.log(event.target.value);
  document.body.style.backgroundColor = selectEl.value;
});

function initBackground() {
  
  const foundColor = localStorage.getItem('color');
  if (foundColor !== null) {
    document.body.style.backgroundColor = foundColor;
  }
}
