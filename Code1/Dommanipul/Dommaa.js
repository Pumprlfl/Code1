"use strict";
let spanElement = document.getElementsByTagName("span")[0];
spanElement.textContent = "Aaahh";
let newspan = document.createElement("span");
newspan.textContent = "World";
document.body.appendChild(newspan);
console.log(newspan);
