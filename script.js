let users=[];
let userContainer=document.getElementById('userContainer');
function renderUsers(){
    users.forEach((user)=>{
        let div = document.createElement('div');
        let name = document.createElement('p');
        let email = document.createElement('p');
        div.classList.add('users');
        userContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(email);
        name.innerText=user.name;
        email.innerText=user.email;
    })
}

function addUser(){

    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let user ={
        name : name.value,
        email : email.value,
    }
    users.push(user);
    renderUsers();
}