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
  fromArray(arr = []) {
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
  getNodeFrom (k) {
    if (k < 0 || k > this.size) return 'Argumento no valido';
    const sp = this.size - k;
    let current = this.head;
    let ct = 1;
    while (current) {
      if (sp === ct) return current.value;
      current = current.next;
      ct ++;
    }
  }
  static listSum (list01, list02) {
    if (!list01 || !list02) return 'No es posible una solución';
    let current01 = list01.head;
    let current02 = list02.head;
    let res = new LinkedList();
    let llevamos = 0;
    while (current01 || current02) {
      const sum = Number(current01.value + current02.value);
      res.append((sum % 10) + llevamos);
      llevamos = Math.floor(sum/10);
      current01 = current01.next;
      current02 = current02.next;
    }
    return res;
  }
}

const arr = [1,2,3,4,5,6,7,8,9];
const list = new LinkedList();
list.fromArray(arr);

const val = list.getNodeFrom(5);
console.log(val);

////////////////////////////////////////////////////////////////////////////////

// const list01 = new LinkedList();
// const list02 = new LinkedList();

// const arr01 = [6,3,1];
// const arr02 = [6,0,3];

// list01.fromArray(arr01);
// list02.fromArray(arr02);

// const result = LinkedList.listSum(list01, list02);
// let current = result.head;

// while (current) {
//   console.log(current.value);
//   current = current.next;
// }

////////////////////////////////////////////////////////////////////////////////

// const list = new LinkedList();

// let n;
// n = list.append(1);
// n = list.append(5);
// n = list.append(80);
// n = list.append(60);
// n = list.append(5);
// n = list.append(1);
// n = list.append(2);

// list.removeDuplicates();

// const a = list.toArray();
// console.log(a);

// const arrayList = new LinkedList();
// const arr = [3,2,1,3,4,5];
// arrayList.fromArray(arr);

// let current = arrayList.head;

// while (current) {
//   console.log(current.value);
//   current = current.next;
// }

