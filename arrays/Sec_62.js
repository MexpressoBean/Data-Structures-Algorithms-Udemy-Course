// Kevin Ramirez
// Section 62 - Arrays Intro
// Udemy - https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/
// Date - 2/25/20

const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// push - built function adds element to the end of the array
strings.push('e'); // O(1)

// pop - removes element from the end of the array
strings.pop(); // O(1)

// unshift - adds element at the begining of the array
strings.unshift('x'); // O(n)

// splice - adds and/or deletes element/s from a specified position in an array
strings.splice(2, 0, 'alien'); // O(n)


console.log(strings);
