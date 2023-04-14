"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.stackList = [];
    }
    Stack.prototype.add = function (num) {
        return this.stackList.push(num);
    };
    Stack.prototype.pop = function () {
        return this.stackList.pop();
    };
    Stack.prototype.show = function () {
        return this.stackList;
    };
    Stack.prototype.reverse = function () {
        var tempArray = [];
        var length = this.stackList.length;
        // console.log(this.stackList.length);
        for (var i = 0; i < length; i++) {
            tempArray.push(this.pop());
        }
        return tempArray;
    };
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
stack.add(6);
// stack.reverse();
console.log(stack.reverse());
