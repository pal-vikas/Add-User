let users=[];
let userContainer=document.getElementById('userContainer');
let alert = document.getElementById('alert');
function renderUsers(){
    userContainer.innerHTML="";
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

function doesUserExist(email){

    let user = users.filter((user)=>{
        return user.email==email;

    })
    return user.length>0 ? true :false;
}

function hideAlert(){

    setTimeout(()=>{
        alert.classList.remove('success','danger')

    }, 2000)
}

function addUser(){

    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let user ={
        name : name.value,
        email : email.value,
    }
    let userExsit= doesUserExist(email.value);
    if(userExsit==false){

        users.push(user);
        alert.classList.add('success');
        alert.innerText='User added successfully!';
        hideAlert();
    }
    else{
        alert.classList.add('danger');
        alert.innerText='Email already exist!';
        hideAlert();
    }
    renderUsers();
}