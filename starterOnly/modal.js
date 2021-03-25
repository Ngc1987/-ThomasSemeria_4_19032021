function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//* Close modal event

const modalClose = document.querySelector(".close");

modalClose.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

//******************************

//Vise la div qui a l'ID 'loginForm' de mon html
let form = document.querySelector('#loginForm');
//Ecouter la modification de l'email
form.email.addEventListener('change', function() {
  validEmail(this);
})

console.log(form.email);

const validEmail = function (inputEmail) {


  let checkMail = document.getElementById('email');
  let emailRegExp = new RegExp (
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g');
  let testEmail = emailRegExp.test(inputEmail.value);
  let small = document.getElementById('mailError');

if (testEmail) {
  small.innerHTML ='';
  return true;
} else {
  small.innerHTML = 'Email invalide';
  small.style.color = 'red';
  checkMail.border.style = '1px solid red';
  return false;
};




}

/* Email valid or not

function validate() {
    let checkMail;

    checkMail = document.getElementById("email");

    if (checkMail(email)) {
      alert('Adresse e-mail valide');
    }
    else {
      alert('Adresse e-mail non valide');
    }
    return false;
} */