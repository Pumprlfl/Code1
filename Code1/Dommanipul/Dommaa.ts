let spanElement = document.getElementsByTagName("span")[0];
spanElement.textContent = "Aaahh";

let i:number = 1;

do {let newspan = document.createElement("span");
    newspan.textContent = "World";
    document.body.appendChild(newspan);
    newspan.style.backgroundColor = Math.random();
    console.log(i);
    i++;
} while(i <= 10)

