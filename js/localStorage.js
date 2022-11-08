'use strict';
console.log('localStorage.js');


const set1El = document.getElementById('set1');
const set2El = document.getElementById('set2');
const get1El = document.getElementById('get1');
const get2El = document.getElementById('get2');


const user1Id = 'i1234';

set1El.addEventListener('click', () => {
    console.log('Paspaudei set');
    localStorage.setItem('user', user1Id);
});


get1El.addEventListener('click', () => {
    // iskonsolint user1Id
    // console.log(user1Id);
    const userIdInLocal = localStorage.getItem('user');
    if (userIdInLocal !== null){
    console.log('userIdInLocal ===', userIdInLocal);
    } else {
        console.log('User not found');
    }
});


const todoArr = [
    {title: 'do sports', done: false},
    {title: 'buy bananas', done: true},
    {title: 'see birds', done: false},
];
console.log(JSON.stringify(todoArr,null,2));
set2El.addEventListener('click', () => {
    console.log('Paspaudei arr');
    // pries dedami masyva ar objekta i localstorage, turim paversti ji i texta
    const todosJson = JSON.stringify(todoArr);
    // jsonines masyvo formos
    localStorage.setItem('todos', todosJson);
    document.body.append(todosJson);
});



// get2El.addEventListener('click', () => {
//     // iskonsolint user1Id
//     // console.log(user1Id);
//     const userIdInLocal = localStorage.getItem('user');
//     if (userIdInLocal !== null){
//     console.log('userIdInLocal ===', userIdInLocal);
//     } else {
//         console.log('User not found');
//     }
// });

get2El.onclick = function () {
        const todosInJson = localStorage.getItem('todos');
        // console.log('todosInJson ===', todosInJson);s
        // gauta jsonine duomenu versija pasiversti atgal i js JSON.parse()
        const todosInJs =JSON.parse(todosInJson);
        console.log('todosInJs ===', todosInJs);
        
};
