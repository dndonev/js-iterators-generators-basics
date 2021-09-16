'use strict';

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insertNode(value) {
        const newNode = new Node(value);

        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insert(this.root, newNode);
        }
    }

    insert(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insert(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insert(node.right, newNode);
            }
        }
    }

    *traverseInOrderRecursively(node) {
        if (node) {
            yield* this.traverseInOrderRecursively(node.left);
            yield node.data;
            yield* this.traverseInOrderRecursively(node.right);
        }
    }

    traverseInOrderIteratively(node) {
        let stack = [];
        let current = node;
        let result = [];
        while (true) {
            while (current) {
                stack.push(current);
                current = current.left;
            }

            if (stack.length == 0) {
                break;
            }

            let lastCurrent = stack.pop();
            result.push(lastCurrent.data);
            current = lastCurrent.right;
        }

        return result;
    }
}


const tree = new BST();
tree.insertNode(2);
tree.insertNode(4);
tree.insertNode(3);
tree.insertNode(1);
tree.insertNode(5);

const generator = tree.traverseInOrderRecursively(tree.root);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());