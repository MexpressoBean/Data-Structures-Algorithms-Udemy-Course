// Kevin Ramirez
// Section 116 - Implement Stack using Array (JS Built in methods)
// Udemy - https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/
// Date - 4/5/20

// In javascript arrays already act like stacks and come with built in methods for us to use

class Stack
{
  constructor()
  {
      this.array = []; // Creates empty array
  }

  // Gets the item on the top of the stack
  peek()
  {
    return this.array[this.array.length-1];
  }// END peek


  // Adds an item onto the stack
  push(value)
  {
    this.array.push(value);
    return this;
  }// END push


  // Removes item from the stack
  pop()
  {
    this.array.pop();
    return this;
  }// END pop


  isEmpty()
  {
    if(this.array.length === 0)
    {
      return true;
    }
    return false;
  }

}// END class Stack

///////////////////////////////////////////////////////////////////////////////

const myStack = new Stack();

myStack.push(3);
//console.log(myStack.isEmpty());
myStack.push(22);
myStack.push(8);
myStack.pop();
console.log(myStack);
