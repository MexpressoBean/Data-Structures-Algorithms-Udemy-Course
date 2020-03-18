// Kevin Ramirez
// Section 78 - Hash Table implementation
// Udemy - https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/
// Date - 3/14/20

class HashTable
{
  constructor(size)
  {
    this.data = new Array(size);
  } // END constructor


  // Underscore indicates that this is considered a private property that should not be accessed
  _hash(key)
  {
    let hash = 0;

    for(let i = 0; i < key.length; i++)
    {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // END hash function


  set(key, value)
  {
    let address = this._hash(key);

    if(!this.data[address])
    {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  } // END set


  get(key)
  {
    let address = this._hash(key);

    const currentBucket = this.data[address];

    if(currentBucket)
    {
      for(let i = 0; i < currentBucket.length; i++)
      {
        if(currentBucket[i][0] == key)
        {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  } // END get


  keys() // returns an array of keys
  {
    if (!this.data.length)
    {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++)
    {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length)
        {
          // but also loop through all the potential collisions
          if (this.data.length > 1)
          {
            for (let j = 0; j < this.data[i].length; j++)
            {
              result.push(this.data[i][j][0])
            }
          }
          else
          {
            result.push(this.data[i][0])
          }
        }
    }
    return result;
  }

} // END HashTable class



/////////////////////////////////////////////////////////////

let fruits = new HashTable(50);

fruits.set("apples", 400);
fruits.set("watermelons", 300);
fruits.set("oranges", 200);
fruits.set("mangos", 350); // Potential collision issue !!!!
fruits.set("guavas", 30);
fruits.set("strawberries", 80);

console.log(fruits.keys());
