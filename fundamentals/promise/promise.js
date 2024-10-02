function doSomething() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('few operations performed');
            resolve('https://google.com');
        }, 200);
    });
}

// doSomething();

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved');
    }, 500);
});

// promise.then(success, reject);

function success() {
    console.log('success');
}

function reject() {
    console.log('reject');
}

const promise2 = new Promise((resolve, reject) => {
    resolve('fulfilled');
    reject('error');
})

// promise2.then(
//     function (value) { console.log(value); },
//     function (error) { console.log(error); }
// );

const promise1 = Promise.resolve(12);
const promise3 = 23;
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve,100,'foo');
})

Promise.all([promise1, promise3, promise4]).then((values) => {
    // console.log(values);
});

const result = Promise.all([]).then((values) => {
    
});

const promiseAssignment = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolves');
    }, 2000);
});

// console.log(promiseAssignment);
promiseAssignment.then(
    (value) => {
        console.log(value);
    }, 
    (error) => {
        console.log(error);
    }
)