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
    this.min = null;
    this.size = 0;
  } 
  pop () {
    if (this.isEmpty()) return 'No more items'; 
    this.size --;
    const item = this.top;
    this.top = this.top.prev;
    return item;
  } 
  push (data) {
    this.size ++;
    data = Number(data);
    const node = new Node(data);
    node.prev = this.top;
    this.top = node;
    this.setMin(data);
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
class minStack {
  constructor () {
    this.stack = new Stack();
    this.supSt = new Stack();
    this.size = this.stack.size;
    this.top = this.stack.top;
  }
  pop () {
    const p = this.stack.pop();
    if (this.supSt.top && this.supSt.top.value === p.value) {
      this.supSt.pop();
    }
  }
  push (data) {
    this.stack.push(data);
    this.setMin(data);
  }
  peek () {
    return this.stack.peek();
  }
  isEmpty () {
    return this.stack.isEmpty();
  }
  getMin () {
    return this.supSt.peek();
  }
  setMin (data) {
   if (!this.supSt.top || this.supSt.top && data < this.supSt.top.value) {
      this.supSt.push(data);
    } 
  }
  toArray () {
    return this.stack.toArray();
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


const stack = new minStack();
stack.push(5);
stack.push(4);
stack.push(8);
stack.push(2);
stack.push(1);
stack.pop();
stack.pop();
// const stackArray = stack.toArray();
// console.log(stackArray);

// let size = stack.size;
// for (let i = 0; i < size; i++) {
//   console.log(stack.pop());
// }

// Stack
// const stack = new Stack();
// stack.push(5);
// stack.push(4);
// stack.push(3);
// stack.push(2);
// stack.push(1);
// const stackArray = stack.toArray();
// const min = stack.getMin();
// // console.log(min);

// let size = stack.size;
// for (let i = 0; i < size; i++) {
//   console.log(stack.pop());
// }

// const stackArray02 = stack.toArray();
// console.log(stackArray02);

// Queue
// const queue = new Queue();
// queue.add(5);
// queue.add(4);
// queue.add(3);
// queue.add(2);
// queue.add(1);
// const queueArray = queue.toArray();
// console.log(queueArray);