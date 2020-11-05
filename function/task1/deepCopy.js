//Deep Copy
//реалізувати глибоке копіювання обєкту за допомогою рекурсій

let obj = {
    "a": {
        "b": {
            "c": {
                "d": {
                    "e": {
                        "r": {
                            "t": {
                                "z": {
                                    "x": {
                                        "g": {
                                            "h": {name:"divka",girl: undefined}
                                                    
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

function copy(o){
let copy = JSON.stringify(o);
let newObj = JSON.parse(copy);
return console.log(newObj);
};

copy(obj);
