const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {

  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    this.items[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    let removedElement = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return removedElement;
  }
}

let queue = new Queue();

module.exports = {
  Queue
};
