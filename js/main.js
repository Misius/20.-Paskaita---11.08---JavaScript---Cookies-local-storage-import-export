'use strict';
console.log('main.js');


const set1El = document.getElementById('set1');
const set2El = document.getElementById('set2');
const get1El = document.getElementById('get1');
const get2El = document.getElementById('get2');

const user1Id = 'u587';

const todoArr = [
  { title: 'do sports', done: false },
  { title: 'buy bananas', done: true },
  { title: 'see birds', done: false },
];

// console.log(JSON.stringify(todoArr, null, 2));

set1El.addEventListener('click', () => {
  document.cookie = `user=${user1Id};`;
  document.cookie = 'name=James';
  document.cookie = 'age=25';
  document.cookie = 'darkMode=on';
  console.log(`user=${user1Id};`.length);
});

// let toShowAdd = true;
set2El.onclick = setToShowCookie;

function setToShowCookie() {
  // toShow=true; expires=<trys dienos> UTC string
  const now = new Date();
  console.log('now ===', now);
  const future = new Date(+now + 20 * 1000);
  console.log('future ===', future);
  let cookieString = `toShow=true; expires=${future.toUTCString()};`;
  document.cookie = cookieString;
}

get1El.addEventListener('click', () => {
  const allCookies = document.cookie;
  console.log('allCookies ===', allCookies);
  console.log("parseCookie('age') ===", parseCookie('age11'));
});

// user=u587; name=James; age=25; darkMode=on

function parseCookie(cookieName) {
  // padalinti cookie i masyva
  const cookieArr = document.cookie.split('; ');
  console.log('cookieArr ===', cookieArr);
  // cookieArr[0] === user=u587
  const key = cookieArr[0].split('=')[0];
  const value = cookieArr[0].split('=')[1];
  // destruct
  // const [key, value] = cookieArr[0].split('=');

  const cookieArrOfObj = cookieArr.map((cString) => {
    const key = cString.split('=')[0];
    const value = cString.split('=')[1];
    return { [key]: value };
  });
  console.log('cookieArrOfObj ===', cookieArrOfObj);

  const foundCookie = cookieArrOfObj.find((cObj) => cObj[cookieName]);
  console.log('foundCookie ===', foundCookie);
  if (foundCookie) {
    return foundCookie[cookieName];
  }
  return false;
}
// parseCookie('age');

if (!parseCookie('toShow')) {
  alert('buy');
  setToShowCookie();
}
document.cookie = `age=; expires=${new Date(1999).toUTCString()}`;