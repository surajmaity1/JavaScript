const tasks = [1, 2, 3, 4, 5];

function promise(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('promise resolves!');
        }, time * 1000);
    });
}

const promises = [promise(1), promise(2), promise(3)];

for (let index = 0; index < promises.length; index++) {
    promises[index].then((resolve) => {
        console.log(resolve);
    })
}