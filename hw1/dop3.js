let color = prompt("введите цвет светлофора");
let isRoadClear = confirm("машины есть?");

switch(color) {
    
    case "зеленый":
        if(isRoadClear) alert("иди");
        else alert("подожди пока нарушители проедут");
    break;

    case "желтый":
        if(isRoadClear) alert("жди");
        else alert("все равно жди");
    break;

    case "красный":
        if(isRoadClear) alert("стой все равно");
        else alert("стой и жди");
    break;

    default:
        alert("делай что хочешь");

}


