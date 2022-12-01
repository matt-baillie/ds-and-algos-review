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
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // we get a match!! get to work!

        // Option 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // if parent > current.value, make parent.left child the current.left
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              // if parent < current.value, make current.left the parent's right child
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          // Option 2: Right child which doesn't have a left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            // if parent> current, make current's right child the parent's left child
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              // if parent < current, make current's right child the parent's right child
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          // Option 3: Right child that has a left child
        } else {
          // find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;

          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
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
tree.remove(32);

console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
