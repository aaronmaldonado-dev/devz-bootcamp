import {Stack} from './ds-stacks.js';

class StackAsQueue {
  constructor () {
    this.size = 0;
    this.stackA = new Stack();
    this.stackB = new Stack();
  }
  move (from, to) {
    while (from.size > 0) {
      const d = from.peek();
      to.push(d.value);
      from.pop();
    }
  }
  add (data) {
    this.move(this.stackB, this.stackA);
    this.stackB.push(data);
    this.move(this.stackA, this.stackB);
    this.size ++;
  }
  peek () {
    return this.stackB.peek();
  }
  remove() {
    return this.stackB.pop();
  }
  isEmpty () {
    return this.stackB.isEmpty();
  }
}

const q = new StackAsQueue();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
console.log(q.peek().value);
console.log(q.stackB.toArray());
console.log(q.remove().value);
console.log(q.remove().value);
console.log(q.stackB.toArray());