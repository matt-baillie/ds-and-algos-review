class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    // edge cases? length = 0; null value
    if (value === undefined) {
      return this;
    }
    // create new node
    const newNode = new Node(value);
    // length ===0
    // add as head
    // tail as head
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = this.top;
      console.log("Top time!!!: " + this.top.value);
    } else {
      newNode.next = this.top;
      // this.top.next = newNode;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // edge cases? length = 0?
    if (this.isEmpty()) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    // let leader = this.bottom;
    // let second = this.bottom.next;
    // // loop through till tail -1?
    // while (second.next !== null) {
    //   leader = second;
    //   second = second.next;
    //   console.log("leader: " + leader.value, "second: " + second.value);
    // }
    // console.log(leader);
    // leader.next = null;
    // this.top = leader;
    // remove tail -1's next pointer
    this.length--;
    return holdingPointer;
  }
  isEmpty() {
    return this.length === 0 ? true : false;
  }
  printList() {
    console.log(this);
  }
}

const stackList = new StackList();
stackList.push(5);
stackList.push(11);
stackList.push(22);
stackList.push(33);
// console.log(this);
stackList.printList();
stackList.pop();
stackList.pop();
stackList.pop();
stackList.pop();

stackList.printList();
// console.log("peek: " + stackList.peek().value);
// console.log(stackList.isEmpty());
