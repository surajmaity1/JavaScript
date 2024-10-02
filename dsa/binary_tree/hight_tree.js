// Give an algorithm for finding the height (or depth) of the binary tree.


const { buildTree, levelOrder } = require('./binary_tree.js');

function main() {
    const root = buildTree();
    levelOrder(root);
    // const hight = hightRecursion(root);
    const hight = hightIteration(root);
    console.log(hight);
}

// Using level order traversal.
// This is similar to BFS of Graph algorithms. 
// End of level is identified with NULL
function hightIteration(root) {
    if (root === null) {
        return 0;
    }

    const queue = [];
    queue.push(root);

    // End of first level
    queue.push(null);
    let height = 0;

    while (queue.length !== 0) {
        root = queue.shift();

        // Completion of current level
        if (root === null) {
            // Put another marker for next level
            if (queue.length !== 0) {
                queue.push(null);
            }
            height++;
        }
        else {
            if (root.left !== null) {
                queue.push(root.left);
            }

            if (root.right !== null) {
                queue.push(root.right);
            }
        }
    }

    return height;
}

function hightRecursion(root) {
    if (root === null) {
        return 0;
    }
    else {
        const leftSubtree = hightRecursion(root.left);
        const rightSubtree = hightRecursion(root.right);

        if (leftSubtree > rightSubtree) {
            return leftSubtree + 1;
        }
        return rightSubtree + 1;
    }
}

main();
