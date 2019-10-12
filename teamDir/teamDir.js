/*
let teamMember = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    major : document.getElementById("major").value,
    role : document.getElementById("role").value,
    Bio : document.getElementById("bio").value
};


let teamDir = [];
teamDir.push(teamMember);

let submit = document.getElementById("save");
submit.onclick = saveTeamMember(teamDir);

function saveTeamMember(teamDir){
    const jsonString = JSON.stringify(teamDir);
    localStorage.setItem('teamList',jsonString);
}

const fromStoragte = get();

function get() {
    const fromstorage = localStorage.getItem('teamList');
    return fromstorage ? JSON.parse(fromstorage) : [];
}


document.getElementById("list-members").innerHTML= fromStoragte.innerHTML;

console.log(fromStoragte);

*/
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
    const jsonString = JSON.stringify(teamDir);
    localStorage.setItem('teamList',jsonString);
    
    let s = get();
    console.log(s);
} 

function get() {
    const fromstorage = localStorage.getItem('teamList');
    return fromstorage ? JSON.parse(fromstorage) : [];
}
