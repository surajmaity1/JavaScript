// module "my-module.js"
// Using named exports
function cube(x) {
    return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

const graph = {
    options: {
        color: "white",
        thickness: "2px",
    },
    draw() {
        console.log("From graph draw function");
    },
};

export { cube, foo, graph };


// module "my-module.js"
// Using default exports

export default function square(x) {
    return x * x;
}
