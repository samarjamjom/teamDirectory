/*
let teamDir = [];

function myFunction() { 
    let teamMember = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        major : document.getElementById("major").value,
        role : document.getElementById("role").value,
        Bio : document.getElementById("bio").value
    };
    teamDir.push(teamMember);
    const jsonString = JSON.stringify(teamDir); // string representation of obj to store it in local storage
    localStorage.setItem('teamList',jsonString);
    
    let s = get();
    console.log(s);
} 

function get() {
    const fromstorage = localStorage.getItem('teamList');
    return fromstorage ? JSON.parse(fromstorage) : [];
}
*/

const ul = document.querySelector('ul');
let teamDir = localStorage.getItem('teamList') ? JSON.parse(localStorage.getItem('teamList')) : [];
//console.log(teamDir);

localStorage.setItem('teamList', JSON.stringify(teamDir));
const data = JSON.parse(localStorage.getItem('teamList'));
//console.log(data);

const liMaker = text => {
    const li = document.createElement('li');
    
    li.textContent = text.name  + "\n" +text.email + 
    console.log( li.textContent);
    ul.appendChild(li);
  }


function myFunction() { 
    let teamMember = {
        name : document.getElementById("nam").value,
        email : document.getElementById("email").value,
        major : document.getElementById("major").value,
        role : document.getElementById("role").value,
        Bio : document.getElementById("bio").value
    };
    teamDir.push(teamMember);
    localStorage.setItem('teamList', JSON.stringify(teamDir));
   
    nam.value = '';
    email.value = '';
    bio.value = '';
} 

data.forEach(item => {
    liMaker(item)
  })

