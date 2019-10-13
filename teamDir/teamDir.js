
const list = document.getElementById("list-members");
let teamDir = localStorage.getItem('teamList') ? JSON.parse(localStorage.getItem('teamList')) : [];
let counter = 0;

localStorage.setItem('teamList', JSON.stringify(teamDir));
const data = JSON.parse(localStorage.getItem('teamList'));
//console.log(data);

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
        const position = "beforeend"; 
    if(document.getElementById("Check").checked){
        position = "beforeend";
    }

    list.insertAdjacentHTML(position, t);
    //at specific position..    
}


function myFunction() { 
    let teamMember = {
        name : document.getElementById("nam").value,
        email : document.getElementById("email").value,
        major : document.getElementById("major").value,
        role : document.getElementById("role").value,
        Bio : document.getElementById("bio").value
    };

    /*
    for(var i = 0; i < data.length; i++) {
        if(data[i].email == text.email){
            alert("This Email was been used");
        }
    }
*/
 
    teamDir.push(teamMember);
    localStorage.setItem('teamList', JSON.stringify(teamDir));
   
    teamDir1.push(teamMember);
    localStorage.setItem('teamList1', JSON.stringify(teamDir1));

    teamDir2.unshift(teamMember);
    localStorage.setItem('teamList2', JSON.stringify(teamDir2));

    nam.value = '';
    email.value = '';
    bio.value = '';
    counter = counter + 1;

} 

data.forEach(item => {
    liMaker(item)
  })

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

    }
});