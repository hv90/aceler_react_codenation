'use strict'

const fibonacci = _ => {
    let fiboArray = [0, 1];
    let newFibo = 0;

    for (let before = 0, current = 1; newFibo <= 350; before++, current++) {
        newFibo = fiboArray[before] + fiboArray[current];
        fiboArray.push(newFibo);
    }

    return fiboArray;
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}