// Kevin Ramirez
// Section 95 - Node Class
// Udemy - https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/
// Date - 3/17/20

class Node
{
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}// END class Node

class LinkedList
{
  // Called when the class object is instantiated, also creates first node
  constructor(value)
  {
    this.head = {
      value: value,
      next: null
    }

    this.tail = this.head; // LinkedList object has only 1 node at first so the head is also the tail at this point
    this.length = 1;
  }// END constructor


  // Add node to the end of the list
  append(value)
  {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this; // returns the linked list
  }// END append


  // Add node to the begining of the list
  prepend(value)
  {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this; // returns the linked list
  }// END prepend


}// END class LinkedList



/////////////////////////////////////////

const myList = new LinkedList(10);

// myList.append(12);
// myList.append(3);
// myList.prepend(4);
// console.log(myList);
