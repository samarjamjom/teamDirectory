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
const list = document.getElementById("list-members");
let teamDir = localStorage.getItem('teamList') ? JSON.parse(localStorage.getItem('teamList')) : [];
//console.log(teamDir);

localStorage.setItem('teamList', JSON.stringify(teamDir));
const data = JSON.parse(localStorage.getItem('teamList'));
//console.log(data);

const liMaker = text => {
    /*
    const li = document.createElement('li');
    li.textContent = text; 
    ul.appendChild(li);
    */

    /*

    const t = `<li class=" LIST_"> 
    <h4> ${text.name} </h4>
    <p> ${text.email} </p>
    </li>`
    */
 
    const t = `<div class="LIST">
    <div class="List_name"> ${text.name} </div>
    <div class="List_email"> 
    <span> ${text.email} </span>
    <span> ${'/'} </span> 
    <span> ${text.major} </span> 
    <span> ${'/'} </span> 
    <span> ${text.role} </span>
    </div>
    <div class="List_bio"> ${text.Bio} </div>
    </div>
    `

    const position = "beforeend";
    list.insertAdjacentHTML(position, t);
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

