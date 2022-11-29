class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    // edge; length = 0;
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    // first --> node --> last --> newNode
    this.length++;
    return this;
  }
  dequeue() {
    // remove first
    // edge: 0 or 1 length
    if (this.length <= 1) {
      this.first = null;
      this.last = null;
      this.length = 0;
      return this;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
  isEmpty() {}
}

const queue = new Queue();
console.log(queue.dequeue());
queue.enqueue("Matt");
queue.enqueue("Joe");
queue.enqueue("Ethan");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.peek());
