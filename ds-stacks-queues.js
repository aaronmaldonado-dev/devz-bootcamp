class Node {
  constructor (value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/**
 * LIFO - Last In First Out
 */
class Stack {
  constructor () {
    this.top = null;
    this.size = 0;
  } 
  pop () {
    this.size --;
    const item = this.top;
    this.top = this.top.prev;
    return item;
  } 
  push (data) {
    this.size ++;
    const node = new Node(data);
    node.prev = this.top;
    this.top = node; 
  }
  peek ()  {
    return this.top;
  }
  isEmpty () {
    if (!this.top) return true;
  }
  toArray () {
    let current = this.top;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.prev;
    }
    return arr;
  }
}

/**
 * FIFO - First In First Out
 */
class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  } 
  pop () {
    this.size --;
    const item = this.first;
    this.first = this.first.prev;
    return item;
  } 
  add (data) {
    this.size ++;
    const node = new Node(data);
    if (!this.first) this.first = node;
    if (this.last) this.last.prev = node;
    this.last = node; 
  }
  peek ()  {
    return this.first;
  }
  isEmpty () {
    if (!this.first && !this.last) return true;
  }
  toArray  () {
    let current = this.first;
    let arr = [];
    while (current) {
      arr.unshift(current.value);
      current = current.prev;
    }
    return arr;
  }
}

// Stack
// const stack = new Stack();
// stack.push(5);
// stack.push(4);
// stack.push(3);
// stack.push(2);
// stack.push(1);
// const stackArray = stack.toArray();
// console.log(stackArray);

// Queue
const queue = new Queue();
queue.add(5);
queue.add(4);
queue.add(3);
queue.add(2);
queue.add(1);
const queueArray = queue.toArray();
console.log(queueArray);