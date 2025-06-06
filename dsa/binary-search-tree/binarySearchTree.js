class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Recursive construction
function constructRecursive(root, data) {
    if (root === null) {
        return new Node(data);
    }

    if (data < root.data) {
        root.left = constructRecursive(root.left, data);
    } else if (data > root.data) {
        root.right = constructRecursive(root.right, data);
    } else {
        // Node with the same value already exists
        console.log(`${data} already present`);
        return root;
    }

    return root;
}

// Iterative construction
function constructIterative(root, data) {
    const newNode = new Node(data);

    if (root === null) {
        return newNode;
    }

    let pointer = root;
    let current = null;

    while (pointer !== null) {
        current = pointer;
        if (data < pointer.data) {
            pointer = pointer.left;
        } else if (data > pointer.data) {
            pointer = pointer.right;
        } else {
            console.log(`${data} already present`);
            return root;
        }
    }

    if (data < current.data) {
        current.left = newNode;
    } else {
        current.right = newNode;
    }

    return root;
}

// Recursive search
function searchRecursive(root, data) {
    if (root === null) {
        return null;
    }

    if (data < root.data) {
        return searchRecursive(root.left, data);
    } else if (data > root.data) {
        return searchRecursive(root.right, data);
    } else {
        return root;
    }
}

// Iterative search
function searchIterative(root, data) {
    while (root !== null) {
        if (data < root.data) {
            root = root.left;
        } else if (data > root.data) {
            root = root.right;
        } else {
            return root;
        }
    }

    return null;
}

// Find the minimum value node
function findMin(root) {
    if (root === null) {
        return null;
    }

    while (root.left !== null) {
        root = root.left;
    }

    return root;
}

// Pre-order traversal (recursive)
function preorderRecursive(root) {
    if (root !== null) {
        console.log(root.data + " ");
        preorderRecursive(root.left);
        preorderRecursive(root.right);
    }
}

// Main function simulation
function main() {
    let root = null;
    const arr = [20, 10, 5, 50, 34, 69, 21, 48, 40, 49, 35, 41];

    // Construct BST
    for (const item of arr) {
        root = constructRecursive(root, item);
    }

    // Pre-order traversal
    console.log("PreOrder:");
    preorderRecursive(root);

    // Search
    const searchValue = 34;
    const foundNode = searchRecursive(root, searchValue);
    if (foundNode) {
        console.log(`Found: ${foundNode.data}`);
    } else {
        console.log("Not found");
    }

    // Find minimum
    const minNode = findMin(root);
    if (minNode) {
        console.log(`Minimum value: ${minNode.data}`);
    }
}

// Run main
main();

