import {Stack} from './ds-stacks.js';

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

const stack = new minStack();
stack.push(5);
stack.push(4);
stack.push(8);
stack.push(2);
stack.push(1);
stack.pop();
stack.pop();
const stackArray = stack.toArray();
console.log(stackArray);

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