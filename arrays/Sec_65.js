// Kevin Ramirez
// Section 65 - Javascript Classes - optional refresher
// Udemy - https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/
// Date - 2/25/20

// Refence types
//-----------------------------
// [1] === [1]; // This is false

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2; // This is true
object1 === object3; // This is false ???

// objects are refence types in js.
// Reference type is not defined by the language, they are create by the programmer
// reference types are non primitive.

// Arrays are considered objects

// Context vs scope
//-----------------------------
// Context tells you where we are in the object

// this keyword refers to the current class object
// This is an important concept in classes and class instantiation


// Instantiation
//-----------------------------
// Instantiation is when you make a copy of an object and re-use the code.
// Creates instances for multiple copies of an object.

// This is an example of a js class
class Player
{
  constructor(name, type) // Default constructor creates the instance and adds properties of the object
  {
    this.name = name;
    this.type = type;
  }

  introduce()
  {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

// New class that builds off of Player class
class Wizard extends Player
{
  constructor(name, type)
  {
    super(name, type); // This allows the Wizard to run the Player class constructor
  }

  play()
  {
    console.log(`I am a ${this.type}`);
  }
}

// Two obejcts of type wizard are created or instantiated here
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
