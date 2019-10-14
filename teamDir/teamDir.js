//localStorage.clear();

const list = document.getElementById("list-members");

//check if localstorage is Empty or not , then retreive the content of localstorage if not empty
let teamDir = localStorage.getItem('teamList') ? JSON.parse(localStorage.getItem('teamList')) : [];
let teamDir_mirroring = localStorage.getItem('teamList') ? JSON.parse(localStorage.getItem('teamList')) : [];

localStorage.setItem('teamList', JSON.stringify(teamDir));//store  array in local storage in json format
const data = JSON.parse(localStorage.getItem('teamList'));//retreive array from localStorage 

const liMaker = text => {
    //create a div element for each item in array
    const t = `<div class="LIST" style="display: flex">
    <span>
        <input type="button" class = "del_fun" onclick="deleteFunction()" >
    </span>
    <span>
    <div class="List_name"> ${text.name} </div>
    <div class="List_email"> 
    <span> ${text.email} </span>
    <span> ${'/'} </span> 
    <span> ${text.major} </span> 
    <span> ${'/'} </span> 
    <span> ${text.role} </span>
    </div>
    <div class="List_bio"> ${text.Bio} </div>
    </span>

    </div>
    `
    //check if checkbox is checked to add to the bottom
    if(document.getElementById("Check").checked){
        list.insertAdjacentHTML("beforeend", t);
    }

    //if not add to the top
    else{
    const position = "afterbegin";
    list.insertAdjacentHTML(position ,t);
    }
    //at specific position..
}

//make aloop on array to show it on alist
data.forEach(item => {
    liMaker(item);
  })

//function when click save button
function saveFunction() { 
    //create an object of teamMembers
    let teamMember = {
        name : document.getElementById("nam").value,
        email : document.getElementById("email").value,
        major : document.getElementById("major").value,
        role : document.getElementById("role").value,
        Bio : document.getElementById("bio").value
    };
    //requrements for saving a memberObject on array 
    let EmailChecked = 1;
    let FiledChecked = 1;
    let BioChecked = 1;

    //check not use the same email before
    for(let i= 0; i< teamDir.length; i++){
        if(teamDir[i].email == teamMember.email)
        EmailChecked = 0;
    }

    //check all filed are filled 
    if(teamMember.name == "" || teamMember.email == "" || teamMember.major =="major" || teamMember.role == "role" || teamMember.Bio == ""){
        FiledChecked = 0;
        alert("Please fill all field");
    }
    
    //check that Biography area with minChar is 500 and MaxChar is 1500
    if(teamMember.Bio.length < 500 || teamMember.Bio.length > 1500){
        BioChecked = 0;
        alert("Please Biography field is a textarea with 500 character min and 1500 character max. ");
    }

    if(EmailChecked == 0){
        alert("This Email has been used, Please use another one");
    }
    else if (EmailChecked == 1 && FiledChecked == 1 && BioChecked == 1) {
        //if all requirements satisied ,  push item on array
        teamDir.push(teamMember);
        teamDir_mirroring.push(teamMember);
        localStorage.setItem('teamList', JSON.stringify(teamDir));
        //and show it on list 
        liMaker(teamMember);
    }

    //return the defult values to all fileds
    nam.value = '';
    email.value = '';
    bio.value = '';
    major.value = 'major';
    role.value = 'role';

} 

var sortItem = document.getElementById("sortby");

function sortFunction(){
    list.innerHTML = "";
    let option = sortItem.value;

    if(option === "A-Z"){
        teamDir.sort((a, b) => (a.name < b.name) ? 1 : -1);
            teamDir.forEach(item => {
                liMaker(item);
              })
        
    }
    else if(option === "Z-A"){
        teamDir.sort((a, b) => (a.nam > b.nam) ? 1 : -1);
            teamDir.forEach(item => {
                liMaker(item);
              })
    }
    else if(option == "newest"){
        teamDir_mirroring.forEach(item => {
            liMaker(item);
          })
    }
    else if(option == "oldest"){
         for(let i =  teamDir_mirroring.length - 1; i>=0 ; i--){
            liMaker( teamDir_mirroring[i]);
        }
    }   
}


const liMaker2 = text => {
    const t = `<div class="LIST" style="display: flex">
    <span>
        <input type="button" class = "del_fun" onclick="deleteFunction()">
    </span>
    <span>
    <div class="List_name"> ${text.name} </div>
    <div class="List_email"> 
    <span> ${text.email} </span>
    <span> ${'/'} </span> 
    <span> ${text.major} </span> 
    <span> ${'/'} </span> 
    <span> ${text.role} </span>
    </div>
    <div class="List_bio"> ${text.Bio} </div>
    </span>

    </div>
    `
    const position = "beforeend"; 
    list.insertAdjacentHTML(position, t);    
}

var majorFilter = document.getElementById("major-filter");

//everychange on major selectList, majorFilter function execute
majorFilter.addEventListener("change",function(){
    document.getElementById("list-members").innerHTML = "";
    let option = majorFilter.value;
 
    if(option === "engineering"){
        //loop on array to show only members with selected major
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
//everychange on role selectList, roleFilter function execute
var roleFilter = document.getElementById("role-filter");
roleFilter.addEventListener("change",function(){
    document.getElementById("list-members").innerHTML = "";
    let option = roleFilter.value;

    //loop on array to show only members with selected role
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

