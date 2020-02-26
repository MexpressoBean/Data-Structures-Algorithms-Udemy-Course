// Kevin Ramirez
// Section 66 - Implement Array
// Udemy - https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/
// Date - 2/25/20

// Arrays in js are objects with integer based keys
// Side note: treat string problems as array problems

// Very basic Array class
class MyArray
{
  constructor() // Default constructor creates the class instance
  {
    this.length = 0; // How many items the array has
    this.data = {}; // Stores the actual data
  }

  get(index) // allows for access
  {
    return this.data[index];
  }

  push(item) // adds new item at the end of the array
  {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop() // deletes the last item from the array
  {
    const lastItem = this.data[this.length - 1]; // gets the last item in the array

    delete this.data[this.length - 1]; // deletes the last item from the array

    this.length--; // decrements the array length count

    return lastItem;
  }

  delete(index)
  {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) // O(n)
  {
    for(let i = index; i < this.length - 1; i++) // start at the index to be deleted
    {
      this.data[i] = this.data[i + 1]; // shift the items to the left by 1
    }

    delete this.data[this.length - 1]; // delete the last item

    this.length--; // decrement the length count
  }
} // END class




// Class object instantiated
const newArray = new MyArray();

newArray.push('hello');
newArray.push('kevin');
newArray.pop();
console.log(newArray);
