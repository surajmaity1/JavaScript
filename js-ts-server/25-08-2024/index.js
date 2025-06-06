/*
    1. write a new promise
    2. it'll resolve in two seconds
    3. when it resolves, print promises resolves
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1 resolves !!");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2 resolves !!")
    }, 2000);
})

Promise.all([promise1, promise2]).then((res) => {
    console.log(res)
});