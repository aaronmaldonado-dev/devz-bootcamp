class Node {
  constructor (value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  /**
   * @todo needs tail implementation
   * @param {*} value 
   * @returns {Node}
   */
  prepend (value) {
    this.size ++;
    const node = new Node(value, this.head);
    this.head = node;
    if (!this.tail) this.tail = node;
    return node;
  }
  append (value) {
    this.size ++;
    let current = this.head;
    const node = new Node(value);
    if (!current) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    return this;
  }
  fromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
    return this;
  }
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  removeDuplicates () {
    const pool = new Set();
    let current = this.head;
    let prev = null;
    while (current) {
      if (pool.has(current.value)) {
        prev.next = current.next;        
      } else {
        pool.add(current.value);
        prev = current;
      }
      current = current.next;
    }
    return this;
  }
}

const list = new LinkedList();

let n;
n = list.append(1);
n = list.append(5);
n = list.append(80);
n = list.append(60);
n = list.append(5);
n = list.append(1);
n = list.append(2);

list.removeDuplicates();

const a = list.toArray();
console.log(a);

// const arrayList = new LinkedList();
// const arr = [3,2,1,3,4,5];
// arrayList.fromArray(arr);

// let current = arrayList.head;

// while (current) {
//   console.log(current.value);
//   current = current.next;
// }