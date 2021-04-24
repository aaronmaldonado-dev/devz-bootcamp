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
    this.size += 1;
    const node = new Node(value, this.head);
    this.head = node;
    if (!this.tail) this.tail = node;
    return node;
  }
  append (value) {
    this.size += 1;
    let current = this.head;
    if (!current) {
      const node = this.prepend(value);
      return node;
    }
    while (current) {
      if (!current.next) {
        const node = new Node(value);
        current.next = node;
        this.tail = node;
        return node;
      }
      current = current.next;
    }
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
}

const list = new LinkedList();

let n;
n = list.append(4);
n = list.append(5);
n = list.append(9);
n = list.append(0);
n = list.append(5);
n = list.append(1);
n = list.append(2);

const a = list.toArray();
console.log(a);

const arrayList = new LinkedList();
const arr = [3,2,1,3,4,5];
arrayList.fromArray(arr);

let current = arrayList.head;

while (current) {
  console.log(current.value);
  current = current.next;
}