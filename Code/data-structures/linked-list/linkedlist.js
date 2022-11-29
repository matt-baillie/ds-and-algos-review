class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new NewNode(value);
    // current tail
    this.tail.next = newNode;
    // new tail
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    // index >= this.length ? (index = this.length) : null;
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new NewNode(value);
    const leader = this.traverseToIndex(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
  }
  traverseToIndex(index) {
    let currentNode = this.head;
    let count = 0;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  delete(index) {
    if (index === undefined) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    } else if (index > list.length) {
      index = this.length - 2;
      const leader = this.traverseToIndex(index);
      console.log(leader);
      leader.next = null;
      this.tail = leader;
      this.length--;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const deleteNode = leader.next;
    leader.next = deleteNode.next;
    this.length--;

    return this.printList();
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
// if (index === 0) {
//   this.prepend(value);
//   return this.printList();
// }

const list = new LinkedList(10);
list.append(5);
list.append(16);
list.prepend(1);
list.insert(2, 3);
console.log(list.printList());
// list.insert(9, 3);
list.delete(99);

console.log(list.printList());

// console.log(list);
