// Kevin Ramirez
// Section 114 - Implement Stack using linked list
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


class Stack
{
  constructor()
  {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Gets the item on the top of the stack
  peek()
  {
    return this.top;
  }// END peek


  // Adds an item onto the stack
  push(value)
  {
    const newNode = new Node(value);

    if(this.bottom === null && this.length === 0)
    {
      this.top = newNode; // Stack was previously empty, 1 item in the stack is both top and bottom
      this.bottom = newNode;
    }
    else
    {
      const oldTopNode = this.top; // Variable that holds the old top node
      this.top = newNode; // Makes the new node to be the top node
      this.top.next = oldTopNode; // Set the new top node to point to the old top node
    }

    this.length++;

    return this;
  }// END push


  // Removes item from the stack
  pop()
  {
    if(!this.top) // Top does not exist
    {
      return null;
    }

    if(this.top === this.bottom) // Array is empty
    {
      this.bottom = null;
    }

    const oldTopNode = this.top; // Variable that holds the old top node
    this.top = this.top.next; // The node below the top node is now the top

    this.length--; // Decrement the size by 1

    return this;
  }// END pop


  isEmpty()
  {
    if(this.bottom === null && this.top === null)
    {
      return true;
    }

    return false;
  }

}// END class Stack

///////////////////////////////////////////////////////////////////////////////
const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.push(100);
myStack.push(200);

console.log(myStack);
