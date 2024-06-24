let s = ["Having lent ...", 
    "arriving...",
    "opening the door...",
    "walking through...",
    "your cousin catches you not working and eats you"
]
let Beginning: string = prompt(s[0])!;

switch (Beginning) {
    case "left":
        let Answerleft: string=prompt (s[1])!;
        switch (Answerleft){
            case "take":
                alert("death")
            break;
            default:
                alert("freedom")
            break;}
        break;
    case "right":
        let Answerright: string=prompt (s[2])!;
        break;
    case "forward":
        let Answerforward: string=prompt (s[3])!;
        break;
    default:
        alert(s[4])
    break;
   }