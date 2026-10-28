"use strict";

//KONTAKT HTML

//Hämta element från DOM
const form = document.querySelector("#kontaktform");
const dogNameInput = document.querySelector("#dogname");
const chipNumberInput = document.querySelector("#chipnr");
const lastVaccine = document.querySelector("#vaccination");
const checkIn = document.querySelector("#incheckning");
const checkOut = document.querySelector("#utcheckning");
const wishesInput = document.querySelector("#message");
const humanNameInput = document.querySelector("#humanname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const terms = document.querySelector("#villkor");
const errorList = document.querySelector("#errorList");

form.addEventListener("submit", onSubmit);

//Array som kan visa felmeddelanden
let errors = [];

//Funktionen som körs i eventlyssnaren
function onSubmit(event) {
  event.preventDefault();

//Läsa in värden som skrivs in i fälten
  const meddelande = document.querySelector("#meddelandeTillUser");  
  const dogName = dogNameInput.value.trim();
  const chipNumber = chipNumberInput.value.trim();
  const wishes = wishesInput.value.trim();
  const humanName = humanNameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  //Rensa meddelandet till användaren
  meddelande.innerHTML = "";

//Om fälten i formuläret inte fyllts i korrekt ska det visas felmeddelanden
  if(!validateForm(dogName, chipNumber, wishes, humanName, email, phone)) {
    displayErrors();
  } else {
    //Skriv ut meddelande att det har skickats till användaren och rensa formuläret
    meddelande.innerHTML = "Tack! Vi har mottagit ditt formulär"
    clearForm();
  }
};

//validera Formuläret
function validateForm(dogName, chipNumber, wishes, humanName, email, phone) {

  //Rensa tidigare felmeddelanden och arrayen
  errors = [];
  errorList.innerHTML = "";

  //Variabel som kollar efter fel
  let validate = true;

  //Validera alla fält
  if (dogName === "") {
    errors.push("Du måste ange namn på hunden/hundarna");
    validate = false;
  }

  if (chipNumber === "") {
    errors.push("Du måste ange ett chipnummer");
    validate = false;
  }

  if (!lastVaccine.value) {
    errors.push("Du måste ange ett datum för sista vaccination");
    validate = false;
  }

  if (!checkIn.value) {
    errors.push("Du måste ange ett datum för incheckning");
    validate = false;
  }

  if (!checkOut.value) {
    errors.push("Du måste ange ett datum för utcheckning");
    validate = false;
  }

  if (wishes === "") {
    errors.push("Du måste ange önskemål, har du inget önskemål gör en punkt");
    validate = false;
  }

  if (humanName === "") {
    errors.push("Du måste ange ditt fullständiga namn");
    validate = false;
  }

  if (email === "") {
    errors.push("Du måste ange din e-post");
    validate = false;
  }

  if (phone === "") {
    errors.push("Du måste ange ditt telefonnummer");
    validate = false;
  }  

  if (!terms.checked) {
    errors.push("Du måste godkänna villkoren (du kan läsa de längst upp på sidan)");
    validate = false;
  }

  //Returnerar resultatet av valideringen
  return validate;
};

//Visa alla felmeddelanden 
function displayErrors() {

  //För varje felmeddelande skapas ett li-element
  if(errors.length > 0) {
    for(let i = 0; i < errors.length; i++) {
      const liEl = document.createElement("li");
      liEl.innerHTML = errors[i];
      
      //li elementet kommer att ingå i ul errorList i kontakt HTML-filen
      errorList.appendChild(liEl);
    }
  }
}

//Rensa formuläret
function clearForm() {
    
    errors = [];
    errorList.innerHTML = "";

    dogNameInput.value = "";
    chipNumberInput.value = "";
    lastVaccine.value = "";
    checkIn.value = "";
    checkOut.value = "";
    wishesInput.value = "";
    humanNameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    terms.checked = false;
}