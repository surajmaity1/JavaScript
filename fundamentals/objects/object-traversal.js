const { object } = require("joi");

function isEqual(obj1, obj2) {
    if (
        obj1 === undefined ||
        obj1 === null ||
        obj2 === undefined ||
        obj2 === null
    ) {
        return false;
    }

    const obj1Lenght = Object.keys(obj1).length;
    const obj2Lenght = Object.keys(obj2).length;

    if (obj1Lenght !== obj2Lenght) {
        return false;
    }

    for (const item in obj1) {
        // if (item === 'd') {
        //     if (isEqual(obj1[item], obj2[item])) {
        //         console.log('array equal');
        //     }
        //     // console.log();
        //     // console.log(`${item}: ${obj1[item]}`);
        //     // console.log(`${item}: ${obj2[item]}`);
        // }
        console.log(`${item}: ${obj1[item]}` + ` ${item}: ${obj2[item]}`);

        if (obj2[item] === undefined) {
            return false;
        }

        if (typeof obj1[item] === 'object' && isEqual(obj1[item], obj2[item]) !== true) {
            return false;
        }

        if (obj2[item] === undefined || obj1[item] !== obj2[item]) {
            return false;
        }
    }

    return true;
}

// console.log(isEqual({ b: 2, a: 1 }, { a: 1, b: 2}));
// console.log(isEqual({ b: 2, a: 1 }, { a: 1, b: 3}));
// console.log(isEqual({ a: 1, c: 2 }, { a: 1, b: 2 }));

console.log(isEqual({ b: 2, d: [1, 2, 3], a: 1 }, { d: [1, 2, 3], a: 1, b: 2 }));