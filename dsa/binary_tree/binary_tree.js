class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree() {
    const root = new Node(1);

    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);

    return root;
}

function levelOrder(root) {
    if (root == null) {
        console.log('Tree: empty.');
        return;
    }

    const queue = [];
    const storeElements = [];
    queue.push(root);

    while(queue.length !== 0) {
        const popped = queue.shift();
        storeElements.push(popped.data);

        if (popped.left !== null) {
            queue.push(popped.left);
        }

        if (popped.right !== null) {
            queue.push(popped.right);
        }
    }
    console.log('Tree: ' +storeElements.join(' '));
}

module.exports = {
    buildTree,
    levelOrder
};