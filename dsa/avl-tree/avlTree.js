class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}

// Function to calculate the height of a node
function height(root) {
    return root === null ? -1 : root.height;
}

// Left Rotation (LL)
function singleRotateLeft(previousRoot) {
    const newRoot = previousRoot.left;
    previousRoot.left = newRoot.right;
    newRoot.right = previousRoot;

    previousRoot.height = Math.max(height(previousRoot.left), height(previousRoot.right)) + 1;
    newRoot.height = Math.max(height(newRoot.left), previousRoot.height) + 1;

    return newRoot;
}

// Right Rotation (RR)
function singleRotateRight(previousRoot) {
    const newRoot = previousRoot.right;
    previousRoot.right = newRoot.left;
    newRoot.left = previousRoot;

    previousRoot.height = Math.max(height(previousRoot.left), height(previousRoot.right)) + 1;
    newRoot.height = Math.max(height(newRoot.right), previousRoot.height) + 1;

    return newRoot;
}

// Left-Right Rotation (LR)
function lrRotation(node) {
    node.left = singleRotateRight(node.left);
    return singleRotateLeft(node);
}

// Right-Left Rotation (RL)
function rlRotation(node) {
    node.right = singleRotateLeft(node.right);
    return singleRotateRight(node);
}

// Iterative insertion
function insert(root, data) {

    if (root === null || root === undefined) {
        return new Node(data);
    }

    if (data < root.data) {
        root.left = insert(root.left, data);

        if ((height(root.left) - height(root.right)) === 2) {
            if (data < root.left.data) {
                root = singleRotateLeft(root);
            } else {
                root = lrRotation(root);
            }
        }
    } else if (data > root.data) {
        root.right = insert(root.right, data);

        if (height(root.right) - height(root.left) === 2) {
            if (data > root.right.data) {
                root = singleRotateRight(root);
            } else {
                root = rlRotation(root);
            }
        }
    }

    root.height = Math.max(height(root.left), height(root.right)) + 1;
    return root;
}

// In-order traversal (recursive)
function inorderRecursive(root) {
    if (root !== null) {
        inorderRecursive(root.left);
        // console.log(root.data + " ");
        process.stdout.write(`${root.data} `);
        inorderRecursive(root.right);
    }
}

function main() {
    let root = null;
    const arr = [20, 10, 5, 50, 34, 69, 21, 48, 40, 49, 35, 41];

    // Construct AVL TREE
    for (const item of arr) {
        root = insert(root, item);
    }

    // console.log(root);

    // In-order traversal
    console.log("PreOrder:");
    inorderRecursive(root);
}

main();