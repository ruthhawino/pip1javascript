

// Write a function that takes a string as input and returns the 
// number of vowels in the string.

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        count++;
      }
    }
    return count;
  }
  console.log(countVowels("Fantastic fabiulus"))

//   Write a function that takes an array of numbers as input and returns 
//   the sum of all the numbers.

  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  let arr = [1, 2, 3, 4, 5];
  console.log(sumArray(arr)); 



//   Write a function that takes two numbers as input and returns true 
//   if their sum is greater than 100, and false otherwise.


  function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;
  }
  console.log(sumGreaterThan100(50,60))
  console.log(sumGreaterThan100(6,7))




  //Write a function that takes in a array of numbers as a parameter and returns 
  //the second largest number in the array

  function findSecondLargest(arr) {
    if (arr.length < 2) {
      return null;
    }
    let largest = arr[0];
    let secondLargest = arr[1] < largest ? arr[1] : largest;
  
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest;
  }



  //Write a function that takes a string as a parameter and returns true if
  // the string is a palindrome and false otherwise

  function isPalindrome(str) {
    // Remove any non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
        
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    
    
    return true;
  }
  