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

//*******************/ CLOSE MODAL EVENT /******************************
//**********************************************************************
//**********************************************************************
const modalClose = document.querySelector(".close");

modalClose.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

//**********************************************************************//
//*************************   FORMULAIRE   *****************************//
//**********************************************************************//

let form = document.querySelector("#inscription");

//**********************************************************************//
//*************************   CHAMP EMAIL   ****************************//
//**********************************************************************//
//**************   Ecouter la modification de l'email   ****************//
  form.email.addEventListener('change', function() {
  validEmail(this);
})

//*** Fonction verification email pendant la saisie de l'utilisateur ***//
const validEmail = function (inputEmail) {

  let emailErreur = document.getElementById("emailErreur");
  let emailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g');
  let testEmail = emailRegExp.test(inputEmail.value);
  // console.log(inputEmail.value); 

  if (testEmail) {
      emailErreur.innerHTML ='';
      return true;
  } else {
      emailErreur.innerHTML = 'Email invalide';
      return false;
  };
}

//**********************************************************************//
//*************************   CHAMP PRENOM   ***************************//
//**********************************************************************//
//**************   Ecouter la modification du prénom   *****************//
form.prenom.addEventListener('change', function() {
  validPrenom(this);
})

//*** Fonction verification email pendant la saisie de l'utilisateur ***//
const validPrenom = function (inputPrenom) {

  let prenomErreur = document.getElementById("prenomErreur");
  let prenomRegExp = new RegExp ('^[a-zA-Z]{2}[a-zA-Z-\'éèêàâôöïäüÊÈ]*$','g');
  let testPrenom = prenomRegExp.test(inputPrenom.value);
  console.log(testPrenom); 

  if (testPrenom) {
      prenomErreur.innerHTML ='';
      return true;
  } else {
      prenomErreur.innerHTML = 'Veuillez saisir 2 caractères minimum pour le champ prénom';
      return false;
  };
}


//**********************************************************************//
//***************************   CHAMP NOM   ****************************//
//**********************************************************************//
//*****************   Ecouter la modification du nom   *****************//
form.nom.addEventListener('change', function() {
  validNom(this);
})

//*** Fonction verification email pendant la saisie de l'utilisateur ***//
const validNom = function (inputNom) {

  let nomErreur = document.getElementById("nomErreur");
  let nomRegExp = new RegExp ('^[a-zA-Z]{2}[a-zA-Z-\'éèêàâôöïäüÊÈ]*$','g');
  let testNom = nomRegExp.test(inputNom.value);
  console.log(testNom); 

  if (testNom) {
      nomErreur.innerHTML ='';
      return true;
  } else {
      nomErreur.innerHTML = 'Veuillez saisir 2 caractères minimum pour le champ nom';
      return false;
  };
}


//**********************************************************************//
//************************   CHAMP BIRTHDATE   *************************//
//**********************************************************************//
//********   Ecouter la modification de la date de naissance   *********//
form.birthdate.addEventListener('change', function() {
  validBirthdate(this);
})

//*** Fonction verification email pendant la saisie de l'utilisateur ***//
const validBirthdate = function (inputBirthdate) {

  let birthdateErreur = document.getElementById("birthdateErreur");
  let birthdateRegExp = new RegExp ('^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$','g');
  let testBirthdate = birthdateRegExp.test(inputBirthdate.value);
  console.log(testBirthdate); 

  if (testBirthdate) {
      birthdateErreur.innerHTML ='';
      return true;
  } else {
      birthdateErreur.innerHTML = 'Veuillez saisir une date valide';
      return false;
  };
}


//**********************************************************************//
//*********************   CHAMP NOMBRE TOURNOIS   **********************//
//**********************************************************************//
//************   Ecouter la modification de la quantité   **************//
form.quantity.addEventListener('change', function() {
  validQuantity(this);
})

//*** Fonction verification email pendant la saisie de l'utilisateur ***//
const validQuantity = function (inputQuantity) {

  let quantityErreur = document.getElementById("quantityErreur");
  let quantityRegExp = new RegExp ('^[0-9]+$');
  let testQuantity = quantityRegExp.test(inputQuantity.value);
  console.log(testQuantity); 

  if (testQuantity) {
      quantityErreur.innerHTML ='';
      return true;
  } else {
      quantityErreur.innerHTML = 'Veuillez saisir uniquement des chiffres';
      return false;
  };
}


//**********************************************************************//
//****************   VALIDER CONDITIONS D'UTILISATION   ****************//
//**********************************************************************//
//**********   Ecouter la modification de la case à cocher   ***********//
// form.checkbox1.addEventListener('change', function() {
//     let validerConditions = document.getElementById("checkbox1");
//     let conditionsErreur = document.getElementById("conditionsErreur");

//     if (!validerConditions.checked) {
//       conditionsErreur.innerHTML = "Veuillez accepter les conditions d'utilisation";
//       return false;
//   } 
// }
// )











//*******************/ FORMULAIRE /*************************************
//**********************************************************************
//**********************************************************************

document.querySelector("#inscription").addEventListener("submit", function(e) {

  let erreur;
  let checkbox1 = document.getElementById("checkbox1");
  
  let inputs = this;

  // Traitement générique pour que tous les champs soient remplis

  for (let i = 0; i < inputs.length; i++) {
    console.log(inputs[i]);
    if (!inputs[i].value) {
      erreur = "Veuillez renseigner tous les champs";
      break;
    }
  }


  if (!checkbox1.checked) {
    erreur = "Veuillez accepter les conditions d'utilisation";
  }



  if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
} else {
    alert("Formulaire envoyé !");
}
})
  // let prenom = document.getElementById("prenom");
  // let nom = document.getElementById("nom");
  // let email = document.getElementById("email");
  // let birthdate = document.getElementById("birthdate");
  // let quantity = document.getElementById("quantity");


  
  // if (!quantity.value) {
  //   erreur = "Veuillez saisir une quantité";
  // }
  // if (!birthdate.value) {
  //   erreur = "Veuillez saisir une date de naissance";
  // }
  // if (!email.value) {
  //   erreur = "Veuillez saisir un email";
  // }
  // if (!nom.value) {
  //   erreur = "Veuillez saisir un nom";
  // }
  // if (!prenom.value) {
  //   erreur = "Veuillez saisir un prénom";
  // }

// })



// let form = document.querySelector("#formulaire");

// form.first.addEventListener('change', function() {
//   validFirst(this);
// })

// const validFirst = function(inputFirst) {
//   let firstRegExp = new RegExp ('^[a-zA-Z0-9_\'éèÊÈE]$','g');
//   let testFirst = firstRegExp.test(inputFirst.value);
//   console.log(testFirst);









// let firstRegExp = new RegExp ('^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,10}$','g');



//*******************/ FORMULAIRE /*************************************
//**********************************************************************
//**********************************************************************

// document.getElementById("inscription").addEventListener("submit", function(e) {

//   let erreur;
//   let prenom = document.getElementById("prenom");
//   let nom = document.getElementById("nom");
//   let email = document.getElementById("email");
//   let birthdate = document.getElementById("birthdate");
//   let quantity = document.getElementById("quantity");
//   let checkbox1 = document.getElementById("checkbox1");


//   if (!checkbox1.checked) {
//     erreur = "Veuillez accepter les conditions d'utilisation";
//   }
//   if (!quantity.value) {
//     erreur = "Veuillez saisir une quantité";
//   }
//   if (!birthdate.value) {
//     erreur = "Veuillez saisir une date de naissance";
//   }
//   if (!email.value) {
//     erreur = "Veuillez saisir un email";
//   }
//   if (!nom.value) {
//     erreur = "Veuillez saisir un nom";
//   }
//   if (!prenom.value) {
//     erreur = "Veuillez saisir un prénom";
//   }

//   if (erreur) {
//       e.preventDefault();
//       document.getElementById("erreur").innerHTML = erreur;
//       return false;
//   } else {
//       alert("Formulaire envoyé !");
//   }

// })
