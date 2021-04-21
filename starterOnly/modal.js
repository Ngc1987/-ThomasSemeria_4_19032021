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
let form = document.querySelector("#inscription");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//*******************/ CLOSE MODAL EVENT /******************************
//**********************************************************************
//**********************************************************************

// SELECTION DE L'ELEMENT QUR LEQUEL ON CLIQUERA POUR FERMER LA MODALE
const modalClose = document.querySelector(".close");
// ECOUTE DU CLIC SUR L'ELEMENT ET LUI APPLIQUER LA FONCTION closeModal
modalClose.addEventListener("click", closeModal);
// DEFINITION DE LA FONCTION closeModal
function closeModal() {
  modalbg.style.display = "none";
}



//*******************/ FORMULAIRE /*************************************
//**********************************************************************
//**********************************************************************
// SELECTION DU FORMULAIRE
form.addEventListener("submit", function valid(e) {
  
  let erreur;
  let checkbox1 = document.getElementById("checkbox1");
  let inputs = this;
  let formValidation = document.getElementById("formValidation");
  const formValidationButton = document.getElementById("formValidationButton");


  const formValidationX = document.querySelector(".close2");
  formValidationX.addEventListener("click", () => {
    form.submit();
  })
  // On crée une boucle pour vérifier que tous les inputs ne soient pas vides
  for (let i = 0; i < inputs.length; i++) {
    // console.log(inputs[i]);
    // Si un input n'est pas rempli, un message d'erreur s'affiche
    if (!inputs[i].value) {
      erreur = "Veuillez renseigner tous les champs";
      break;
    }
  }

  // checkbox1 est la case à cocher pour valider les conditions d'utilisation, si 
  // elle n'est pas cochée un message d'erreur apparaît
  if (!checkbox1.checked) {
    erreur = "Veuillez accepter les conditions d'utilisation";
  }

  
  // Si un message d'erreur apparaît, on ne soumet pas le formulaire, on prévient le comportement
  // par défaut avec e.preventDefault, on affiche l'erreur, si pas d'erreur, on fait apparaître
  // une petite fenêtre de confirmation

  if (erreur) {

      e.preventDefault();
      document.getElementById("erreur").innerHTML = erreur;
      return false;

    } else {
          formValidation.style.display = "block";
    }

    // Sur la fenêtre de confirmation, au clic sur le bouton ok, on applique la fonction
    // closeFormValidation
    formValidationButton.addEventListener("click", closeFormValidation );
    // La fonction closeFormValidation fait disparaître la fenêtre de confirmation et transmet le formulaire
    function closeFormValidation() {
      formValidation.style.display = "none";
      form.submit();
    }
})



//**********************************************************************//
//*************************   CHAMP EMAIL   ****************************//
//**********************************************************************//
//**************   Ecouter la modification de l'email   ****************//
  form.email.addEventListener('change', function() {
  validEmail(this);
})

//*** Fonction verification email pendant la saisie de l'utilisateur ***//
const validEmail = function (inputEmail) {

  // emailErreur correspond à un span dans le html qui servira à afficher notre message d'erreur
  let emailErreur = document.getElementById("emailErreur");
  // La RegExp correspondant à ce champ
  let emailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g');
  // On teste si la valeur saisie dans l'input respecte la RegExp correspondante
  let testEmail = emailRegExp.test(inputEmail.value);
  // console.log(inputEmail.value); 


  // Si la valeur saisie dans l'input respecte les règles de la RegExp, testEmail vaut "true"
  // Donc si testEmail est true, on renvoie true, sinon on renvoie false et fait apparaître
  // un message d'erreur
  if (testEmail) {
    emailErreur.innerHTML = '';
      return true;
  } else {
      emailErreur.innerHTML = 'Email invalide';
      return false;
  };
}

//**********************************************************************//
//*************************   CHAMP PRENOM   ***************************//
//**********************************************************************//
form.prenom.addEventListener('change', function() {
  validPrenom(this);
})

const validPrenom = function (inputPrenom) {

  let prenomErreur = document.getElementById("prenomErreur");
  let prenomRegExp = new RegExp ('^[a-zA-Z]{2}[a-zA-Z-\'éèêàâôöïäüÊÈ]*$','g');
  let testPrenom = prenomRegExp.test(inputPrenom.value);
  // console.log(testPrenom); 

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

const validNom = function (inputNom) {

  let nomErreur = document.getElementById("nomErreur");
  let nomRegExp = new RegExp ('^[a-zA-Z]{2}[a-zA-Z-\'éèêàâôöïäüÊÈ]*$','g');
  let testNom = nomRegExp.test(inputNom.value);
  // console.log(testNom); 

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
form.birthdate.addEventListener('change', function() {
  validBirthdate(this);
})

//*** Fonction verification email pendant la saisie de l'utilisateur ***//
const validBirthdate = function (inputBirthdate) {

  let birthdateErreur = document.getElementById("birthdateErreur");
  let birthdateRegExp = new RegExp ('^((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-((0[13578])|(1[02]))-((0[1-9])|([12][0-9])|(3[01])))|((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-((0[469])|11)-((0[1-9])|([12][0-9])|(30)))|(((000[48])|([0-9][0-9](([13579][26])|([2468][048])))|([0-9][1-9][02468][048])|([1-9][0-9][02468][048]))-02-((0[1-9])|([12][0-9])))|((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-02-((0[1-9])|([1][0-9])|([2][0-8])))$');
  let testBirthdate = birthdateRegExp.test(inputBirthdate.value);

  console.log(inputBirthdate.value); 
  console.log(testBirthdate); 

  if (testBirthdate) {
      birthdateErreur.innerHTML ='';
      return true;
  } else {
      birthdateErreur.innerHTML = 'Veuillez saisir une date valide (jj/mm/aaaa)';
      return false;
  };
}



//**********************************************************************//
//*********************   CHAMP NOMBRE TOURNOIS   **********************//
//**********************************************************************//
form.quantity.addEventListener('change', function() {
  validQuantity(this);
})

const validQuantity = function (inputQuantity) {

  let quantityErreur = document.getElementById("quantityErreur");
  let quantityRegExp = new RegExp ('^[0-9]+$');
  let testQuantity = quantityRegExp.test(inputQuantity.value);
  // console.log(testQuantity); 

 
  if (testQuantity) {
      quantityErreur.innerHTML ='';
      return true;
  } else {
      quantityErreur.innerHTML = 'Veuillez saisir uniquement des chiffres';
      return false;
  };
}

