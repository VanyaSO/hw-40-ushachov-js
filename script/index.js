"use strict";


let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

function DeepFreeze(obj){

    for(let item in obj){
        console.log(item);

        if (typeof obj[item] === "object"){
            Object.freeze(obj[item]);
            return DeepFreeze(obj[item]);
        }

    }

    return;

}

DeepFreeze(user);

//проверка на freez
user.data.a = 454545;

console.log(user.data.a);