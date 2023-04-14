export class Stack<T> {
  stackList: T[] = [];
  constructor() {}
  add(num: T) {
    return this.stackList.push(num);
  }
  pop() {
    return this.stackList.pop();
  }
  show() {
    return this.stackList;
  }
  reverse() {
    let tempArray: T[] = [];
    let length = this.stackList.length;
    // console.log(this.stackList.length);
    for (let i = 0; i < length; i++) {
      tempArray.push(this.pop());
    }
    return tempArray;
  }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
stack.add(6);
// stack.reverse();
console.log(stack.reverse());
