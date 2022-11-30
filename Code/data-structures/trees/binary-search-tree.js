class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;

      while (true) {
        if (newNode.value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    // edge: root = null
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;

    while (currentNode) {
      // if currentNode ===value
      if (value < currentNode.value) {
        // if currentNode
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  // remove(){

  // }
}

const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(99);
tree.insert(30);
tree.insert(14);
tree.insert(35);
tree.insert(32);
console.log(tree.lookup(9));
console.log(tree.lookup(99));
console.log(tree.lookup(50));
console.log(tree.lookup(14));
console.log(tree.lookup(10));

console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
