const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const mensaje = document.getElementById("text");
const form = document.getElementById("form");

form.addEventListener("submit", e=>{
  e.preventDefault()
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log(regexEmail.test(email.value))
  if(regexEmail.test(email.value)){

  }
})