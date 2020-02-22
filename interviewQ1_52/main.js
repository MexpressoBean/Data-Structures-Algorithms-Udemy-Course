// Kevin Ramirez
// 2/21/2020
// Section 52 from Master the Coding Interview: Data Structures + Algorithms
// taught by Andrei Neagoie on Udemy

// Given 2 arrays, create a function that lets a user know (true/false)
// whether these two arrays contain any common items.
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// This should return false
// ----------------------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// 2 paremeters - arrays - no size limit
// returns true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// Brute force solution that is not effecient and NOT scalable.
// This solution has 2 nested for loops there for it is Big 0(a*b)
// First solution that came to mind
// function conatainsCommonItem(arr1, arr2)
// {
//   for(let i = 0; i < arr1.length; i++)
//   {
//     for(let j = 0; j < arr2.length; j++)
//     {
//       if(arr1[i] === arr2[j])
//       {
//         return true;
//       }
//     }
//   }
//   return false;
// }


// Better solution:
// array1 => obj{
// a: true,
// b: true,
// c: true,
// x: true
// }

// array2[index] === obj.properties
//
// function conatainsCommonItem(arr1, arr2)
// {
  // loop through the first array and create object where properties === items
  // in the array.

  // Can we assume always 2 params in the function? Discuss and ask questions.

  // let map = {};
  //
  // for(let i = 0; i < arr1.length; i++)
  // {
  //   if(!map[arr1[i]])
  //   {
  //     const item = arr1[i];
  //     map[item] = true;
  //   }
  // }

  // loop through the second array and check if item in the second array exists
  // on the created object.
  // This solution is big O(a + b), better than the one listed above.
//   for(let j = 0; j < arr2.length; j++)
//   {
//     if(map[arr2[j]])
//     {
//       return true;
//     }
//   }
//   return false;
// }


// JS language specific solution that is ideal for readability
function conatainsCommonItem(arr1, arr2)
{
  return arr1.some(item => arr2.includes(item));
}



console.log(conatainsCommonItem(array1, array2));
