"use strict";

//Hamburgermeny på små skärmar
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function(){
  menu.classList.toggle("open");
})



