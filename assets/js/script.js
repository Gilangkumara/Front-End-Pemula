const togleMenu = document.createElement("div");

const eSpan2 = document.createElement("span");
const eSpan3 = document.createElement("span");
const eSpan1 = document.createElement("span");


togleMenu.appendChild(eSpan1);
togleMenu.appendChild(eSpan2);
togleMenu.appendChild(eSpan3);

const navbar = document.querySelector("nav");
const menu = document.querySelector(".menu");

navbar.appendChild(togleMenu);
togleMenu.setAttribute("class", "menuTogle");

// togleMenu.addEventListener('click',function{
//     alert('oke');
// })

togleMenu.addEventListener("click", function (e) {
  togleMenu.classList.toggle("show");
  eSpan1.classList.toggle("show");
  eSpan2.classList.toggle("show");
  eSpan3.classList.toggle("show");
  menu.classList.toggle("show");
});


