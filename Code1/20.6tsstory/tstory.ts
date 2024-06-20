let Beginning: string = prompt("Having lent ...")!;

switch (Beginning) {
    case "left":
        let Answerleft: string=prompt ("arriving...")!;
        switch (Answerleft){
            case "take":
                alert("death")
            break;
            default:
                alert("freedom")
            break;}
        break;
    case "right":
        let Answerright: string=prompt ("opening the door...")!;
        break;
    case "forward":
        let Answerforward: string=prompt ("walking through...")!;
        break;
    default:
        alert("your cousin catches you not working and eats you")
    break;
   }