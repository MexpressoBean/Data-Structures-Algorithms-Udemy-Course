// Kevin Ramirez
// Section 96 - Node Class: Implement insert method
// Udemy - https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/
// Date - 3/23/20

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

      nodeBeforeInsert.next = newNode; // points the node at index-1 to the new node inserting at index

      newNode.next = holdPointer; // points the new node at index to the previous node at index, shifting the nodes to the right
      this.length++; // updates length of the list

      return this;
    }


  }// END insert


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


/////////////////////////////////////////

const myList = new LinkedList(10); // Creates new LL with head value of 10

myList.append(12);
myList.append(32);
myList.append(44);
myList.append(5);
myList.insert(2, 99);

myList.printList();
// console.log(myList);
