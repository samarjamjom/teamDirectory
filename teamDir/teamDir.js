

const list = document.getElementById("list-members");
let teamDir = localStorage.getItem('teamList') ? JSON.parse(localStorage.getItem('teamList')) : [];

localStorage.setItem('teamList', JSON.stringify(teamDir));
const data = JSON.parse(localStorage.getItem('teamList'));

const liMaker = text => {
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
    list.insertAdjacentHTML("beforeend",t); 
}

data.forEach(item => {
    liMaker(item)
  })

function myFunction() { 
    let teamMember = {
        name : document.getElementById("nam").value,
        email : document.getElementById("email").value,
        major : document.getElementById("major").value,
        role : document.getElementById("role").value,
        Bio : document.getElementById("bio").value
    };

    if(teamMember.name == "" || teamMember.email == "" || teamMember.major =="" || teamMember.role == "" || teamMember.Bio == ""){
        alert("Please fill all field");
    }

    else {
        teamDir.push(teamMember);
        fun(teamMember);
    }

    nam.value = '';
    email.value = '';
    bio.value = '';

} 

function fun(text){
    localStorage.setItem('teamList', JSON.stringify(teamDir));
    
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

    if(document.getElementById("Check").checked){
        list.insertAdjacentHTML("beforeend", t);
    }
    
    else{
    const position = "afterbegin";
    list.insertAdjacentHTML(position ,t);
    }
    //at specific position..    
         
}


var sortItem = document.getElementById("sortby");
sortItem.addEventListener("change",function(){
    let option = sortItem.value;
    if(option === "A-Z"){
        teamDir.sort((a, b) => (a.name > b.name) ? 1 : -1);
        localStorage.setItem('teamList', JSON.stringify(teamDir));
    }
    else if(option === "Z-A"){
        teamDir.sort((a, b) => (a.nam < b.nam) ? 1 : -1);
        localStorage.setItem('teamList', JSON.stringify(teamDir));
    }
    else if(option == "newest"){
       
    }
    else if(option == "oldest"){
        ;
    }
});


const liMaker2 = text => {
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

var majorFilter = document.getElementById("major-filter");
majorFilter.addEventListener("change",function(){
    document.getElementById("list-members").innerHTML = "";
    let option = majorFilter.value;
 
    if(option === "engineering"){
        for(let i=0 ; i < teamDir.length ; i++){
            if(teamDir[i].major == "engineering"){
                liMaker2(teamDir[i]);
            } 
        }
    }
    else{
        for(let i=0 ; i < teamDir.length ; i++){
            if(teamDir[i].major == "cs"){
                liMaker2(teamDir[i]);
            } 
        }
    }
});

var roleFilter = document.getElementById("role-filter");
roleFilter.addEventListener("change",function(){
    document.getElementById("list-members").innerHTML = "";
    let option = roleFilter.value;
 
    if(option === "Front-End Developer"){
        for(let i=0 ; i < teamDir.length ; i++){
            if(teamDir[i].role == "Front-End Developer"){
                liMaker2(teamDir[i]);
            } 
        }
    }
    else{
        for(let i=0 ; i < teamDir.length ; i++){
            if(teamDir[i].role == "Back-End Developer"){
                liMaker2(teamDir[i]);
            } 
        }
    }
});