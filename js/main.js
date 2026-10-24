"use strict";

//Hamburgermeny på små skärmar
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function(){
  menu.classList.toggle("open");
})


//HUNDPENSIONATET HMTL
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide img');

// Hitta knapparna i HTML-koden
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Funktion för att uppdatera vilken bild som visas
function updateSlide(direction) {
  // Ta bort 'active'-klassen från den nuvarande bilden
  slides[currentSlide].classList.remove('active');
  
  // Räkna ut nästa index
  currentSlide += direction;
  
  // Hantera om vi går utanför bildlistans gränser
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  
  // Lägg till 'active'-klassen på den nya bilden
  slides[currentSlide].classList.add('active');
}

// Lägg till eventlyssnare på knapparna
prevBtn.addEventListener('click', () => {
  updateSlide(-1);
});

nextBtn.addEventListener('click', () => {
  updateSlide(1);
});