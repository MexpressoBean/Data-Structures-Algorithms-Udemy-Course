// Kevin Ramirez
// Section 102 - Doubly Linked List: Implementation
// Udemy - https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/
// Date - 3/28/20

class Node
{
  constructor(value)
  {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}// END class Node


class DoublyLinkedList
{
  // Called when the class object is instantiated, also creates first node
  constructor(value)
  {
    this.head = {
      value: value,
      next: null,
      prev: null
    }

    this.tail = this.head; // LinkedList object has only 1 node at first so the head is also the tail at this point
    this.length = 1;
  }// END constructor


  // Add node to the end of the list
  append(value)
  {
    const newNode = new Node(value); // Create the new node
    this.tail.next = newNode; // Set the tail to point to the new node
    newNode.prev = this.tail; // Set the newNode prev pointer to point to the current tail node
    this.tail = newNode; // Set the new node as the tail

    this.length++; // Increment the size of the list
    return this; // returns the linked list
  }// END append


  // Add node to the begining of the list
  prepend(value)
  {
    const newNode = new Node(value); // Create the new node
    newNode.next = this.head; // Set new node to point to the first node in the list
    this.head.prev = newNode; // Sets the head node prev to point to the new node
    this.head = newNode; // Set the new node to be the new head node (first in the list)

    this.length++; // Increment the size of the list
    return this; // returns the linked list
  }// END prepend


  //
  traverseToIndex(index)
  {
    if(index >= 0 && index <= this.length)
    {
      let count = 0;
      let currentNode = this.head;

      while(count != index)
      {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    }
    else
    {
      console.log("Invalid index passed");
    }
  }


  // Add node at specific location(index)
  insert(index, value)
  {
    if(index === 0)
    {
      this.prepend(value);
    }
    else if(index >= this.length)
    {
      this.append(value);
    }
    else
    {
      const newNode = new Node(value);

      const nodeBeforeInsert = this.traverseToIndex(index - 1); // gets the node at index-1
      const holdPointer = nodeBeforeInsert.next; // creates a reference to the node thats currently at index

      nodeBeforeInsert.next = newNode; // Points the node at index-1 to the new node inserting at index
      newNode.next = holdPointer; // Points the new node at index to the previous node at index, shifting the nodes to the right
      newNode.prev = nodeBeforeInsert; // New node prev points to the node that is at index - 1
      holdPointer.prev = newNode; // The node that is now after the inserted node points backward to the new node
      this.length++; // Updates length of the list

      return this;
    }
  }// END insert


  // Removes value from the list
  remove(index)
  {
    let nodeBeforeRemove = null;

    if(index === 0)
    {
      this.head = this.head.next; // Set the head equal to the next node
      this.head.prev = null; // Set head prev to point to nothing
      return this;
    }
    else if(index >= this.length)
    {
      nodeBeforeRemove = this.traverseToIndex(this.length - 2);
    }
    else
    {
      nodeBeforeRemove = this.traverseToIndex(index - 1);
    }

    const unwantedNode = nodeBeforeRemove.next; // x -> (removed)
    const nodeAfterUnwanted = unwantedNode.next; // (removed) -> x

    nodeBeforeRemove.next = nodeAfterUnwanted; // Points to the node after the one that is removed

    if(index >= this.length){ nodeAfterUnwanted.prev = nodeBeforeRemove; }// Points back to the node before the one that is removed

    this.length--; // Update length

    return this;
  }// END remove


  printList()
  {
    const array =[];
    let currentNode = this.head;

    while(currentNode != null)
    {
      array.push(currentNode.value); // Adds node value to array

      currentNode = currentNode.next; // Update current node to point to the next node
    }

    console.log(array); // Prints array to the console
  }


}// END class LinkedList


/////////////////////////////////////////////////////////

const myList = new DoublyLinkedList(1); // Creates new LL with head value of 10

myList.append(2);
myList.append(3);
myList.append(4);
myList.remove(3);

myList.printList();
// console.log(myList);
