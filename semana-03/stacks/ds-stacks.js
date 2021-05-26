import {Node} from '../utils.js';

/**
 * LIFO - Last In First Out
 */
export class Stack {
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
    data = data;
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