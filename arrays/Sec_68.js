// Kevin Ramirez
// Section 68 - Write a function that reverses a string
// Udemy - https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/
// Date - 2/26/20

// String input: "Hello"
// Output should be: "olleH"

// My solution - first soluton that came to my mind
function reverse(str)
{
  const newStr = [];

  for(let i = 0; i < str.length; i++)
  {
    newStr[i] = str[(str.length - 1) - i];
  }

  return newStr.join('');
}


// Instructors solution
// function reverse(str)
// {
//   // check input first - must receive a string
//   if(!str || str.length < 2 || typeof str !== 'string')
//   {
//     return 'Error invalid input';
//   }
//
//   const backwards = [];
//   const totalItems = str.length - 1;
//
//   for(let i = totalItems; i >= 0; i--)
//   {
//     backwards.push(str[i]);
//   }
//
//   return backwards.join('');
// } // END Instructors solution


// Solution using built in js methods
// function reverse(str)
// {
//   return str.split('').reverse().join('');
// }


// Modern ES6 js solution
// const reverse = str => str.split('').reverse().join('');



var revStr = reverse("hello");

console.log(revStr);
