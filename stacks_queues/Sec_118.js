// Kevin Ramirez
// Section 118 - Implement Queue
// Udemy - https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/
// Date - 4/5/20

class Node
{
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}// END class Node



class Queue
{
  constructor()
  {
    this.first = null;
    this.last = null;
    this.length = 0;
  }// END constructor


  // Gets the first item in the queue
  peek()
  {
    return this.first;
  }// END peek


  // Adds to the queue
  enqueue(value)
  {
    const newNode = new Node(value);

    if(this.length === 0)
    {
      this.first = newNode;
      this.last = newNode;
    }
    else
    {
      this.last.next = newNode; // Set the newNode to be after the last node
      this.last = this.last.next; // Make the new Node now the last node
    }

    this.length++;
    return this;
  }// END queue


  // Removes from the queue
  dequeue()
  {
    if(!this.first)
    {
      console.log("Queue is empty");
      return null;
    }

    if(this.first === this.last) // When deleting from a queue with one item in it
    {
      this.last = null; // Sets the last to null so that the queue is completely empty
    }

    this.first = this.first.next; // Set the node after the first to now be the first node

    this.length--;
    return this;
  }// END dequeue


  // Returns if the queue is empty or not
  isEmpty()
  {
    if(this.length === 0 && this.first === null)
    {
      return true;
    }

    return false;
  } // END isEmpty
}// END class Queue
//////////////////////////////////////////////////////////////////////////////

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.enqueue(99);
// console.log(myQueue.isEmpty());
// myQueue.enqueue(88);
// myQueue.enqueue(44);
// myQueue.dequeue();

console.log(myQueue);
