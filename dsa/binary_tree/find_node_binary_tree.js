const { buildTree } = require('./binary_tree.js');

function main() {
    const root = buildTree();
    for (let item = 0; item < 10; item++) {
        console.log(`${item} found: ` + searchIteration(root, item));
    }
}

function searchIteration(root, data) {
    if (root == null) {
        return false;
    }

    const stack = [];
    stack.push(root);

    while(stack.length != 0) {
        const root = stack.pop();

        if (root.data === data) {
            return true;
        }

        if (root.left != null) {
            stack.push(root.left);
        }

        if (root.right != null) {
            stack.push(root.right);
        }
    }

    return false;
}

main();