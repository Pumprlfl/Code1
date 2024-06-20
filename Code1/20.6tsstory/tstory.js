"use strict";
let Beginning = prompt("Having lent ...");
switch (Beginning) {
    case "left":
        let Answerleft = prompt("arriving...");
        switch (Answerleft) {
            case "take":
                alert("death");
                break;
            default:
                alert("freedom");
                break;
        }
        break;
    case "right":
        let Answerright = prompt("opening the door...");
        break;
    case "forward":
        let Answerforward = prompt("walking through...");
        break;
    default:
        alert("your cousin catches you not working and eats you");
        break;
}
