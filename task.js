"use strict"
// render user

import {user} from "./data.js";
const $container = document.querySelector('.container');
const getUsers = async  () => {
    const users = await  fetch('https://jsonplaceholder.typicode.com/users');
    const result = await  users.json()
    if(users.status === 200){
        renderUser($container, result);
    }
};

getUsers();

function renderUser(element, users){

  users.forEach(user => {
    const {id, name, email, address, phone, company, website} = user
    // console.log(user);
    element.innerHTML += `
      <div class="user">
        <img src="https://randomuser.me/api/portraits/men/${id}.jpg" alt="user" class="user__img">
      <ul class="user__list">
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Address: ${address.street}, ${address.suite}</li>
        <li>Phone: ${phone}</li>
        <li>Website: <a href="" class="list__link">${website}</a></li>
        <li>Company: ${company.name}</li>
      </ul>
      </div>
    `
    
  })

  element.querySelectorAll(".user").forEach( item => {
    item.addEventListener('click', (event) => {
      // console.log(event);

      if(event.target.nodeName === "DIV"){
        favoriteUser(event.target)
      }

    })
  })


}
let favorituserList = []

function favoriteUser(user){

  console.log();
  const ul = user.querySelector(".user__list");
  // console.log(ul.firstElementChild.textContent);
  favorituserList.push(ul.firstElementChild.textContent)
  console.log(favorituserList);

}






/*
  <ul class="user__list">
    <li>1.Leanne Graham</li>
  </ul>
*/










// function renderUser(element, data){
//     console.log("-> data", data[0]);
//     console.log('data: ', data);

//     for(let i = 0; i < data.length; i++){

//         const {id, name, email, address, phone, company, website} = data[i]

//         element.innerHTML += `
//           <div class="user">
//             <img src="https://randomuser.me/api/portraits/men/${id}.jpg" alt="user" class="user__img">
//           <ul class="user__list">
//             <li>Name: ${name}</li>
//             <li>Email: ${email}</li>
//             <li>Address: ${address.street}, ${address.suite}</li>
//             <li>Phone: ${phone}</li>
//             <li>Website: <a href="" class="list__link">${website}</a></li>
//             <li>Company: ${company.name}</li>
//           </ul>
//           </div>
//         `
//     }
// }

